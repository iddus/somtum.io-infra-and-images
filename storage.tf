resource "google_storage_bucket" "ferrari_bucket" {
  name     = "ferrari_bucket"
  location = var.region
}

resource "google_storage_bucket" "mclaren_mercedes" {
  name     = "mclaren_mercedes"
  location = var.region
}

resource "google_storage_bucket" "red_bull_racing_honda" {
  name     = "red_bull_racing_honda"
  location = var.region
}

resource "google_storage_bucket" "mercedes_bucket" {
  name     = "mercedes_bucket"
  location = var.region
}

resource "google_storage_bucket" "alpine_renault" {
  name     = "alpine_renault"
  location = var.region
}

resource "google_storage_bucket" "alphatauri_honda" {
  name     = "alphatauri_honda"
  location = var.region
}