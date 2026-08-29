# Deployment

The root of this repository is a static site. Publish the repository root and point `template.markellosecosystem.com` to the deployment.

No build command is required.

The production deployment is a Cloudflare Pages Direct Upload project. See
`docs/DEPLOYMENT_CLOUDFLARE.md` for the project mapping, deployment procedure,
verification checks, and recovery procedure.

The reusable repository template intentionally does not contain a root `CNAME`
file. The custom domain is deployment configuration owned by the Cloudflare
reference deployment, not reusable project source. This prevents repositories
created from the GitHub template from inheriting `template.markellosecosystem.com`.
