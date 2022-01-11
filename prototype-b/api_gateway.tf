resource "google_api_gateway_api" "storage_crud" {
  depends_on = [google_project_service.api_gateway, google_project_service.service_management, google_project_service.service_control]
  provider   = google-beta
  api_id     = "storage-crud-api"
}

resource "google_api_gateway_api_config" "storage_crud" {
  depends_on    = [google_project_service.api_gateway, google_project_service.service_management, google_project_service.service_control, google_api_gateway_api.storage_crud]
  provider      = google-beta
  api           = google_api_gateway_api.storage_crud.api_id
  api_config_id = "storage-crud-cfg"
  openapi_documents {
    document {
      path     = "api-configs/openapi-spec-storage-crud.yaml"
      contents = filebase64("api-configs/openapi-spec-storage-crud.yaml")
    }
  }
  lifecycle {
    create_before_destroy = true
  }
  gateway_config {
    backend_config {
      google_service_account = google_service_account.apig_gateway_storage_crud_sa.email
    }
    # https://cloud.google.com/api-gateway/docs/configure-dev-env?&_ga=2.177696806.-2072560867.1640626239#configuring_a_service_account
    # when I added this terraform said that the resource already exists, so I had to tear down all infrastructure and re-provision - also did not make a difference, still getting a 404 error when trying to hit the gateway default hostname endpoint - this resource might be immutable...
  }
}

resource "google_api_gateway_gateway" "storage_crud" {
  depends_on = [google_project_service.api_gateway, google_project_service.service_management, google_project_service.service_control, google_api_gateway_api_config.storage_crud, google_api_gateway_api.storage_crud]
  provider   = google-beta
  api_config = google_api_gateway_api_config.storage_crud.id
  gateway_id = "storage-crud-gw"
  region     = var.region
}

output "storage_crud_api_gateway_default_hostname" {
  value = google_api_gateway_gateway.storage_crud.default_hostname
}
