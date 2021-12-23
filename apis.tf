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
  # depends_on                 = [google_project_service.cloud_resource_manager]
}

# resource "google_project_service" "cloud_resource_manager" {
#   service                    = "cloudresourcemanager.googleapis.com"
#   disable_on_destroy         = false
#   disable_dependent_services = false
# }

# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/google_project_service#service
# check for APIs - https://console.cloud.google.com/apis/library

# kept getting errors that cloud build and cloud run can't be provisioned because was missing cloud resource manager api, so tried to run with resource above but it didn't work, so had to enable the api manually from console
# also not sure if the api enablement for cloud run and cloud build was even necessary, maybe only cloud resource manager api enablement was necessary? Saying this because seeing a lot of other services' apis enabled by default, like cloud storage, container registry, pub/sub, etc.

resource "google_project_service" "iam" {
  service                    = "iam.googleapis.com"
  disable_on_destroy         = false
  disable_dependent_services = false
}
