# gcp-infra-and-microservices

- "While Container Registry is still available and will continue to be supported as a Google Enterprise API, going forward new features will only be available in Artifact Registry, and Container Registry will only receive critical security fixes." - https://cloud.google.com/blog/products/application-development/understanding-artifact-registry-vs-container-registry
  - https://cloud.google.com/artifact-registry/docs/transition/transition-from-gcr#compare
  - https://cloud.google.com/artifact-registry/docs/transition/changes-gcp#artifact-registry_2

- If container images are to be nested in a repo you have to pay particular attention to the container source code's `Dockerfile` and `cloudbuild.yaml`, you can't just copy paste code that goes into these two files from docs because they assume you have a flat project/repo structure and the container image source code is not nested , look at the 2 files above for more guidance...and Merry Xmas! 🎄🎅🏽🎁