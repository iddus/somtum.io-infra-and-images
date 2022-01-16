resource "google_project_iam_custom_role" "cloud-run-storage-crud-custom-role" {
  role_id     = "localTestingCloudRunStorageCRUD"
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
    "storage.objects.create",
    # ^ required for renaming objects, not sure why
  ]
}

resource "google_service_account" "cloud_run_storage_crud_sa" {
  account_id = "local-testing-storage-crud-sa"
}

resource "google_project_iam_binding" "cloud_run_storage_crud_binding" {
  project = var.project_id
  role    = google_project_iam_custom_role.cloud-run-storage-crud-custom-role.id
  members = [
    "serviceAccount:${google_service_account.cloud_run_storage_crud_sa.email}",
  ]
}
