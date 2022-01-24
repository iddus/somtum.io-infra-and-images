provider "google" {
  project     = var.project_id
  credentials = file(var.service_account_key)
  region      = var.region
}

provider "google-beta" {
  project     = var.project_id
  credentials = file(var.service_account_key)
  region      = var.region
}
