terraform init

# only provisioning artifact registry repo
terraform apply -target google_artifact_registry_repository.nodejs-containers --auto-approve

# "Before you can push or pull images, configure Docker to use the gcloud command-line tool to authenticate requests to Artifact Registry."
gcloud auth configure-docker us-east4-docker.pkg.dev
# https://cloud.google.com/artifact-registry/docs/docker/quickstart#auth

# building the container image from it's source directory is just easier and not as error prone...
cd ../nodejs-containers/storage-crud

# setting container image build variables
REGION=us-east4
PROJECT_ID=chrome-courage-336400
IMAGE_REPO=nodejs-containers
IMAGE=storage-crud-container
# this dockerfile is different from the one we'll be using in Cloud Build for our Continuous Delivery, which is Dockerfile. It's also different from Dockerfile.local, which is used for dockerized local testing.
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/#creating-a-dockerfile
DOCKERFILE_PATH=Dockerfile.infra

# building container image
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$IMAGE_REPO/$IMAGE:latest . -f ${DOCKERFILE_PATH}

# pushing container image
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$IMAGE_REPO/$IMAGE:latest

# returning to the directory where this bash script lives
cd ../../prototype-a