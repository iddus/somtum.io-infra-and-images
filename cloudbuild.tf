resource "google_cloudbuild_trigger" "basic_express_trigger" {
  name           = "basic-express-trigger"
  included_files = ["nodejs-containers/basic-express/**"]
  github {
    owner = var.github_repo_owner
    name  = var.github_repo
    # https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/cloudbuild_trigger#included_files
    push {
      branch = "^master$"
    }
  }
  filename = "cloudbuild.yaml"
}
