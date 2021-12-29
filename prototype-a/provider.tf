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

resource "random_string" "random" {
  length  = 16
  special = false
  upper   = false
}
# https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/string
