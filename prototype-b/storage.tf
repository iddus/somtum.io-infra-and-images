resource "random_string" "test_a" {
  length  = 16
  special = false
  upper   = false
}
resource "google_storage_bucket" "test_a" {
  name     = random_string.test_a.result
  location = var.region
}

resource "google_storage_bucket_object" "test_object" {
  name   = "test.txt"
  source = "test.txt"
  bucket = google_storage_bucket.test_a.name
}

resource "random_string" "test_b" {
  length  = 16
  special = false
  upper   = false
}
resource "google_storage_bucket" "test_b" {
  name     = random_string.test_b.result
  location = var.region
}

resource "random_string" "test_c" {
  length  = 16
  special = false
  upper   = false
}
resource "google_storage_bucket" "test_c" {
  name     = random_string.test_c.result
  location = var.region
}

# https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/string
# https://cloud.google.com/storage/docs/naming-buckets#requirements
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object
