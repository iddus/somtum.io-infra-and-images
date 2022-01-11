resource "google_artifact_registry_repository" "nodejs-containers" {
  provider      = google-beta
  location      = var.region
  repository_id = "nodejs-containers"
  format        = "DOCKER"
  depends_on    = [google_project_service.artifact_registry]
}
