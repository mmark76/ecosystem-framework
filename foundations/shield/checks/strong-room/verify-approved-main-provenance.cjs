'use strict';
// Generalizes Control's exact-main release invariant without embedding a
// repository name, release path, image, hostname, or deployment authority.
const { execFileSync } = require('node:child_process');
const { resolve } = require('node:path');
const { CheckError, requireCondition: check, cli } = require('./check-support.cjs');

function runGit(root, args) {
  try {
    return execFileSync('git', args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe']
    }).trim();
  } catch {
    throw new CheckError('BLOCKED', 'Git repository or required origin/main reference is unavailable; refresh and inspect it without exposing credentials.');
  }
}

function verifyApprovedMainProvenance(repositoryRoot, approvedMainSha) {
  const root = resolve(repositoryRoot || '');
  check(/^[a-f0-9]{40}$/i.test(approvedMainSha || ''), 'Approved main SHA must be a full 40-character Git SHA.');
  check(resolve(runGit(root, ['rev-parse', '--show-toplevel'])) === root,
    'Repository root must be explicit; do not package from a nested directory.');

  const expected = approvedMainSha.toLowerCase();
  const head = runGit(root, ['rev-parse', 'HEAD']).toLowerCase();
  const originMain = runGit(root, ['rev-parse', '--verify', 'origin/main']).toLowerCase();
  const status = runGit(root, ['status', '--porcelain', '--untracked-files=all']);

  check(head === expected, 'HEAD does not equal the independently approved main SHA.');
  check(originMain === expected, 'origin/main does not equal the independently approved main SHA.');
  check(status === '', 'Repository is not clean; packaging from uncommitted or untracked inputs is forbidden.');
  return 'Exact approved origin/main provenance and a clean repository were verified; package only the application-owned allowlist next.';
}

if (require.main === module) cli(args => {
  if (args.length !== 2) throw new CheckError('BLOCKED', 'Usage: node verify-approved-main-provenance.cjs REPOSITORY_ROOT APPROVED_MAIN_SHA');
  return verifyApprovedMainProvenance(args[0], args[1]);
});

module.exports = { verifyApprovedMainProvenance };
