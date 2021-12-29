# terraform init

# only provisioning artifact registry repo and required APIs
# terraform apply -target google_artifact_registry_repository.my-repo --auto-approve

# "Before you can push or pull images, configure Docker to use the gcloud command-line tool to authenticate requests to Artifact Registry."
# gcloud auth configure-docker us-east4-docker.pkg.dev
# https://cloud.google.com/artifact-registry/docs/docker/quickstart#auth

# building from the source folder is just easier and not as error prone...
cd ../nodejs-containers/basic-express

# setting variables
REGION=us-east4
PROJECT_ID=chrome-courage-336400
IMAGE_REPO=nodejs-containers
IMAGE=basic-express-container
DOCKERFILE_PATH=Dockerfile.local

# building container image
docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$IMAGE_REPO/$IMAGE:latest . -f ${DOCKERFILE_PATH}

# pushing container image
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$IMAGE_REPO/$IMAGE:latest

# returning to directory where this bash script is
cd ../../prototype-a