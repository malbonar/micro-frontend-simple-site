# Dummy WebSite using Module Federation
This application is basis an example project from the Udemy course _Microfrontends with React: A Complete Developers's Guide_.

One of the requirements is that the container app is not tightly coupled to the Framework of the child module, so you won't see React components being exposed, but rather a function to mount the component.

## Motivation
To increase learning about WebPack's Module Federation

## CI/CD
This project is built via webpack, and deployed to AWS via GitHub Actions when changes are pushed to its GitHub repo.

### AWS Setup
An S3 bucket has been created to store the build artifact files.

A Cloudfront distribution has been created to access those files.

An IAM user has been created with privileges against S3 and Cloudfront. The Secret Key and ID for the user is stored as repository secrets and referenced in the GitHub Action files.

GitHub secrets are maintained from the Settings | Secrets page. Select Repository Secrets.

The Cloudfront distribution does not update it's files from the S3 bucket if the content of those file changes, it only updates when the files themselves change. To force a file to update, you need to add an invalidation. A step has been added to the GitHub Action file to create one for the index.html file. 

## License
See LICENSE file