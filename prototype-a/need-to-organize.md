### `gcloud`

- `gcloud run services list`
  - gives _region, endpoint, associated service account_

### Creating new projects

1. Create new `gcloud` configuration - `gcloud init` then select option 2 (https://cloud.google.com/sdk/docs/initializing)
2. Link github repo in cloud build
3. Manually enable resource manager API

### Things to do...

- `basic-express-microservice` should have it's own SA
- every time tf code runs, the container image is set to the gcp helloWorld one, instead of the basic-express image cloud build is deploying - there has to be a better way manage microservice infra AND be able to upload the latest image using cloud build
  - important things to remember:
    - _before pushing image to artifact registry, an artifact registry repo needs to be created with tf_