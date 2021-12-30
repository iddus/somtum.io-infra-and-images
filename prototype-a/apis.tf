# list of all GCP APIs - https://console.cloud.google.com/apis/library

resource "google_project_service" "cloud_run" {
  service            = "run.googleapis.com"
  disable_on_destroy = false
  # defaults to true, but this person (https://github.com/Lioric/go-cloud/blob/0a3580612654e801b29df8d786d64f53da227867/samples/guestbook/gcp/main.tf) set it to false
  disable_dependent_services = false
  # depends_on = [google_project_service.cloud_resource_manager]
  # https://github.com/nishantnasa/terragrunt-modules-gcp/blob/faa4510a46baf46e8d673b48d61eff157ecb4ac5/project_config/project_services/main.tf
}

resource "google_project_service" "cloud_build" {
  service                    = "cloudbuild.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}

# resource "google_project_service" "cloud_resource_manager" {
#   service                    = "cloudresourcemanager.googleapis.com"
#   disable_on_destroy         = false
#   disable_dependent_services = false
# }
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/google_project_service#service
# kept getting errors that cloud build and cloud run can't be provisioned because was missing cloud resource manager api, so tried to run with resource above but it didn't work, so had to enable the api manually from console
# also not sure if the api enablement for cloud run and cloud build was even necessary, maybe only cloud resource manager api enablement was necessary? Saying this because seeing a lot of other services' apis enabled (in the console) by default, like cloud storage, container registry, pub/sub, etc.

resource "google_project_service" "iam" {
  service                    = "iam.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}

resource "google_project_service" "artifact_registry" {
  service                    = "artifactregistry.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}

# for API gateway - https://cloud.google.com/api-gateway/docs/configure-dev-env#enabling_required_services
resource "google_project_service" "api_gateway" {
  service                    = "apigateway.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}
resource "google_project_service" "service_management" {
  service                    = "servicemanagement.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}
resource "google_project_service" "service_control" {
  service                    = "servicecontrol.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}

resource "google_project_service" "managed_service_api_gateway_creates" {
  service                    = google_api_gateway_api.basic_express.managed_service
  disable_on_destroy         = false
  disable_dependent_services = false
  depends_on                 = [google_api_gateway_api.basic_express]
}
