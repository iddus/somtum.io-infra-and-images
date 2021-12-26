# gcp-infra-and-microservices

### Containerization

- "While Container Registry is still available and will continue to be supported as a Google Enterprise API, going forward new features will only be available in Artifact Registry, and Container Registry will only receive critical security fixes." - https://cloud.google.com/blog/products/application-development/understanding-artifact-registry-vs-container-registry
  - https://cloud.google.com/artifact-registry/docs/transition/transition-from-gcr#compare
  - https://cloud.google.com/artifact-registry/docs/transition/changes-gcp#artifact-registry_2
- If container images are to be nested in a repo you have to pay particular attention to the container source code's `Dockerfile` and `cloudbuild.yaml`, you can't just copy paste code that goes into these two files from docs because they assume you have a flat project/repo structure and the container image source code is not nested , look at the 2 files above for more guidance...and Merry Xmas! 🎄🎅🏽🎁

### API Gateway

- "Using API Gateway, app developers consume your REST APIs to implement apps. Because all APIs are hosted on API Gateway, app developers see a consistent interface across all backend services. By deploying your APIs on API Gateway, you can update the backend service, or even move the service from one architecture to another, without having to change the API. As long as the API to your service stays consistent, app developers will not have to modify deployed apps because of underlying changes on your backend."

  - https://cloud.google.com/api-gateway/docs/about-api-gateway#api-gateway
  - "OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API" - https://swagger.io/docs/specification/about/

  ### `gcloud` commands

  - gcloud run services list
    - gives _region, endpoint, associated service account_
