resource "google_api_gateway_api" "basic_express" {
  depends_on = [google_project_service.api_gateway, google_project_service.service_management, google_project_service.service_control]
  provider   = google-beta
  api_id     = "basic-express-api"
}

resource "google_api_gateway_api_config" "basic_express" {
  depends_on    = [google_project_service.api_gateway, google_project_service.service_management, google_project_service.service_control, google_api_gateway_api.basic_express]
  provider      = google-beta
  api           = google_api_gateway_api.basic_express.api_id
  api_config_id = "basic-express-cfg"
  openapi_documents {
    document {
      path     = "api-configs/openapi-spec-basic-express.yaml"
      contents = filebase64("api-configs/openapi-spec-basic-express.yaml")
    }
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "google_api_gateway_gateway" "basic_express" {
  depends_on = [google_project_service.api_gateway, google_project_service.service_management, google_project_service.service_control, google_api_gateway_api_config.basic_express, google_api_gateway_api.basic_express]
  provider   = google-beta
  api_config = google_api_gateway_api_config.basic_express.id
  gateway_id = "basic-express-gw"
  region     = var.region
}

output "basic_express_api_gateway_default_hostname" {
  value = google_api_gateway_gateway.basic_express.default_hostname
}
