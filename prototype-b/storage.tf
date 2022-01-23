resource "google_storage_bucket" "test_a" {
  name     = random_string.random.result
  location = var.region
}

resource "google_storage_bucket_object" "test_object" {
  name   = "test.txt"
  source = "test.txt"
  bucket = google_storage_bucket.test_a
}

resource "google_storage_bucket" "test_b" {
  name     = random_string.random.result
  location = var.region
}

resource "google_storage_bucket" "test_c" {
  name     = random_string.random.result
  location = var.region
}

# https://cloud.google.com/storage/docs/naming-buckets#requirements
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket
# https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket_object
