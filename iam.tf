data "google_iam_policy" "no_auth_for_cloud_run_invoke" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/iam_policy

resource "google_cloud_run_service_iam_policy" "no_auth_for_basic_express_microservice" {
  location    = google_cloud_run_service.basic_express_microservice.location
  project     = google_cloud_run_service.basic_express_microservice.project
  service     = google_cloud_run_service.basic_express_microservice.name
  policy_data = data.google_iam_policy.no_auth_for_cloud_run_invoke.policy_data
}

# ^ way to allow unauth'ed access to a microservice, i.e., if you don't have this configuration and try to hit the endpoint you'll get a 403
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service#example-usage---cloud-run-service-noauth

resource "google_service_account" "cloud_build_basic_express_sa" {
  account_id = "cloud-build-basic-express-sa"
}

resource "google_project_iam_custom_role" "cloud-build-basic-express-custom-role" {
  role_id     = "cloudBuildBasicExpress"
  title       = "Cloud Build Basic Express"
  description = "Custom role with permissions for cloud build to deploy basic express cloud run microservice"
  permissions = [
    "cloudbuild.builds.create",
    "cloudbuild.builds.update",
    "cloudbuild.builds.list",
    "cloudbuild.builds.get",
    "logging.logEntries.create",
    # "artifactregistry.aptartifacts.*", - tf says this is invalid
    # "artifactregistry.dockerimages.*", - tf says this is invalid
    # "artifactregistry.files.*", - tf says this is invalid
    "artifactregistry.packages.get",
    "artifactregistry.packages.list",
    "artifactregistry.repositories.downloadArtifacts",
    "artifactregistry.repositories.get",
    "artifactregistry.repositories.list",
    "artifactregistry.repositories.uploadArtifacts",
    "artifactregistry.tags.create",
    "artifactregistry.tags.get",
    "artifactregistry.tags.list",
    "artifactregistry.tags.update",
    "artifactregistry.versions.get",
    "artifactregistry.versions.list",
    # "artifactregistry.yumartifacts.*" - tf says this is invalid
  ]
  # created list of permissions based on what I think is required, used permissions listed in the default cloud build service account (https://cloud.google.com/iam/docs/service-accounts#default / https://cloud.google.com/build/docs/cloud-build-service-account#default_permissions_of_service_account) and in the artifact registry docs (https://cloud.google.com/artifact-registry/docs/transition/changes-gcp#artifact-registry / hhttps://cloud.google.com/iam/docs/understanding-roles#artifact-registry-roles) as reference
  # didn't include storage access because in cloudbuild.yaml I set `CLOUD_LOGGING_ONLY` (https://cloud.google.com/build/docs/securing-builds/store-manage-build-logs#store-logs), also because I'm using artifact registry instead of container registry (more details on this can be found in doc links in README)
}

resource "google_project_iam_binding" "cloud_build_basic_express_binding" {
  project = var.project_id
  role    = google_project_iam_custom_role.cloud-build-basic-express-custom-role.id
  members = [
    "serviceAccount:${google_service_account.cloud_build_basic_express_sa.email}",
    # when listing members it must follow this format
  ]
}

# ^ addresses - ERROR: (gcloud.run.deploy) PERMISSION_DENIED: Permission 'run.services.get' denied on resource 'namespaces/main-334018/services/basic-express-microservice' (or resource may not exist).
