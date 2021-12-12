resource "google_cloud_run_service" "basic_express_microservice" {
  name = "basic-express-microservice"
  # naming consistency must be ensured between this and the the container's cloudbuild.yaml file (look at substitutions there)
  location = var.region

  template {
    spec {
      containers {
        image = "us-docker.pkg.dev/cloudrun/container/hello"
        # idea is to create and maintain resources with this dummy image, but then have cloudbuild build and push the actual image to container registry and then deploy to this cloud run service using the gcloud run deploy command
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}
