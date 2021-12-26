resource "google_api_gateway_api" "basic_express" {
  provider = google-beta
  api_id   = "basic-express-api"
}

resource "google_api_gateway_api_config" "basic_express" {
  provider      = google-beta
  api           = google_api_gateway_api.basic_express.api_id
  api_config_id = "basic-express-cfg"
  openapi_documents {
    document {
      path     = "api-configs/openapi-basic-express.yaml"
      contents = filebase64("api-configs/openapi-basic-express.yaml")
    }
  }
  lifecycle {
    create_before_destroy = true
  }
}

resource "google_api_gateway_gateway" "basic_express" {
  provider   = google-beta
  api_config = google_api_gateway_api_config.basic_express.id
  gateway_id = "basic-express-gw"
}
