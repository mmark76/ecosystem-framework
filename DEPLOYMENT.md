# Framework deployment

The Framework-only dashboard is **https://framework.markellosecosystem.com/**.
The umbrella is **https://foundations.markellosecosystem.com/** in
`mmark76/The-Foundation-Systems`.

Framework uses the existing Cloudflare Pages Direct Upload project
`template-markellosecosystem`. Its legacy project name is hosting configuration,
not the dashboard identity. The existing Framework and template domain
associations are retained. See [the deployment procedure](docs/DEPLOYMENT_CLOUDFLARE.md).

Build from the reviewed, merged commit with
`node scripts/build-site.cjs <merged-main-sha> <new-output-directory>`.
GitHub Actions validates and builds but does not deploy. Projects created from
this repository configure their own hostname; no root CNAME is supplied.
