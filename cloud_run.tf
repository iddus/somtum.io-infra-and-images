resource "google_cloud_run_service" "basic_express_microservice" {
  name = "basic-express-microservice"
  # naming consistency must be ensured between this and the the container's cloudbuild.yaml file (look at substitutions there)
  location = var.region
  template {
    spec {
      containers {
        image = "us-docker.pkg.dev/cloudrun/container/hello"
        # idea is to create and maintain resources with this dummy image, but then have cloudbuild build and push the actual image to container registry and then deploy to this cloud run service using the gcloud run deploy command
        # this will load a cute gcp dummy app with a girl, unicorn and boy saying "It's running!"
      }
    }
  }
  traffic {
    percent         = 100
    latest_revision = true
  }
  depends_on = [google_project_service.cloud_run]
  # https://github.com/Lioric/go-cloud/blob/0a3580612654e801b29df8d786d64f53da227867/samples/guestbook/gcp/main.tf
}

output "basic_express_microservice_url" {
  value = google_cloud_run_service.basic_express_microservice.status[0].url
  # status is a list with a single object inside - https://www.terraform.io/docs/language/expressions/types.html#indices-and-attributes - entire status list below
}

# basic_express_microservice_url = tolist([
#   {
#     "conditions" = tolist([
#       {
#         "message" = ""
#         "reason" = ""
#         "status" = "True"
#         "type" = "Ready"
#       },
#       {
#         "message" = ""
#         "reason" = ""
#         "status" = "True"
#         "type" = "ConfigurationsReady"
#       },
#       {
#         "message" = ""
#         "reason" = ""
#         "status" = "True"
#         "type" = "RoutesReady"
#       },
#     ])
#     "latest_created_revision_name" = "basic-express-microservice-rzz4b"
#     "latest_ready_revision_name" = "basic-express-microservice-rzz4b"
#     "observed_generation" = 1
#     "url" = "https://***.a.run.app"
#   },
# ])
