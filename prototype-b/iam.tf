# Cloud Run

data "google_iam_policy" "no_auth_for_cloud_run_invoke" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
  depends_on = [google_project_service.iam]
}
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/data-sources/iam_policy

resource "google_cloud_run_service_iam_policy" "no_auth_for_storage_crud_microservice" {
  location    = google_cloud_run_service.storage_crud_microservice.location
  project     = google_cloud_run_service.storage_crud_microservice.project
  service     = google_cloud_run_service.storage_crud_microservice.name
  policy_data = data.google_iam_policy.no_auth_for_cloud_run_invoke.policy_data
  depends_on  = [google_project_service.iam]
}
# ^ way to allow unauth'ed access to a microservice, i.e., if you don't have this configuration and try to hit the endpoint you'll get a 403
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloud_run_service#example-usage---cloud-run-service-noauth
# https://cloud.google.com/run/docs/authenticating/public

resource "google_project_iam_custom_role" "cloud-run-storage-crud-custom-role" {
  role_id     = "cloudRunStorageCRUD"
  title       = "Cloud Run Storage CRUD"
  description = "Custom role with permissions for cloud run to fetch buckets and objects, delete buckets and objects, and update objects"
  permissions = [
    "storage.objects.get",
    "storage.buckets.get",
    "storage.objects.delete",
    "storage.buckets.delete",
    "storage.buckets.create",
    "storage.objects.list",
    "storage.buckets.list",
    "storage.objects.update",
  ]
}

resource "google_service_account" "cloud_run_storage_crud_sa" {
  account_id = "cloud-run-storage-crud-sa"
  depends_on = [google_project_service.iam]
}

resource "google_project_iam_binding" "cloud_run_storage_crud_binding" {
  project = var.project_id
  role    = google_project_iam_custom_role.cloud-run-storage-crud-custom-role.id
  members = [
    "serviceAccount:${google_service_account.cloud_run_storage_crud_sa.email}",
  ]
}

# Cloud Build

resource "google_service_account" "cloud_build_storage_crud_sa" {
  account_id = "cloud-build-storage-crud-sa"
  depends_on = [google_project_service.iam]
}

resource "google_project_iam_custom_role" "cloud-build-storage-crud-custom-role" {
  role_id     = "cloudBuildStorageCRUD"
  title       = "Cloud Build Storage CRUD"
  description = "Custom role with permissions for cloud build to deploy storage crud cloud run microservice"
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
    "run.services.create",
    "run.services.update",
    "run.services.get",
  ]
  # created list of permissions based on what I think is required, got first 5 permissions from what's in the default cloud build service account (https://cloud.google.com/iam/docs/service-accounts#default / https://cloud.google.com/build/docs/cloud-build-service-account#default_permissions_of_service_account), then the following `artifactRegistry` ones from the artifact registry doc (https://cloud.google.com/artifact-registry/docs/transition/changes-gcp#artifact-registry / hhttps://cloud.google.com/iam/docs/understanding-roles#artifact-registry-roles), and the remaining 2 permissions are from the cloud run deployment doc (https://cloud.google.com/run/docs/reference/iam/roles#additional-configuration) (the "IAM service account user role" stuff in the second bullet point is configured below)
  # didn't include storage access because in cloudbuild.yaml I set `CLOUD_LOGGING_ONLY` (https://cloud.google.com/build/docs/securing-builds/store-manage-build-logs#store-logs), also because I'm using artifact registry instead of container registry (more details on this can be found in doc links in README)
  depends_on = [google_project_service.iam]
}

resource "google_project_iam_binding" "cloud_build_storage_crud_binding" {
  project = var.project_id
  role    = google_project_iam_custom_role.cloud-build-storage-crud-custom-role.id
  members = [
    "serviceAccount:${google_service_account.cloud_build_storage_crud_sa.email}",
    # when listing members it must follow this format
  ]
  depends_on = [google_project_service.iam]
}
# ^ addresses - ERROR: (gcloud.run.deploy) PERMISSION_DENIED: Permission 'run.services.get' denied on resource 'namespaces/main-334018/services/storage-crud-microservice' (or resource may not exist).

data "google_service_account" "default_cloud_run_runtime_sa" {
  account_id = "${var.project_number}-compute@developer.gserviceaccount.com"
  # `account_id` = email
  depends_on = [google_project_service.iam]
}

resource "google_service_account_iam_binding" "cloud_build_storage_crud_sa_binding" {
  service_account_id = data.google_service_account.default_cloud_run_runtime_sa.name
  role               = "roles/iam.serviceAccountUser"
  members = [
    # "serviceAccount:${var.project_number}@cloudbuild.gserviceaccount.com" - got this old code, probably because I didn't make a custom sa for cloud build
    "serviceAccount:${google_service_account.cloud_build_storage_crud_sa.email}"
  ]
  depends_on = [google_project_service.iam]
}
# "When a container is deployed to a Cloud Run service, it runs with the identity of the Runtime Service Account of this Cloud Run service. Because Cloud Build can deploy new containers automatically, Cloud Build needs to be able to act as the Runtime Service Account of your Cloud Run service."
# https://cloud.google.com/run/docs/reference/iam/roles#additional-configuration / https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run#continuous-iam

# API Gateway

resource "google_service_account" "apig_gateway_storage_crud_sa" {
  account_id = "apig-gateway-storage-crud-sa"
  depends_on = [google_project_service.iam]
}
# "Identity to be used by gateway"

resource "google_project_iam_binding" "project" {
  project = var.project_id
  role    = "roles/run.invoker"
  members = [
    "serviceAccount:${google_service_account.apig_gateway_storage_crud_sa.email}"
  ]
}
# https://cloud.google.com/api-gateway/docs/configure-dev-env?&_ga=2.177696806.-2072560867.1640626239#configuring_a_service_account
