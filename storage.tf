resource "google_storage_bucket" "test" {
  name     = random_string.random.result
  location = var.region
}

# https://cloud.google.com/storage/docs/naming-buckets#requirements
