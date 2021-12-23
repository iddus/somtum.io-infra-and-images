resource "google_artifact_registry_repository" "my-repo" {
  provider      = google-beta
  location      = var.region
  repository_id = "nodejs-containers"
  format        = "DOCKER"
}
