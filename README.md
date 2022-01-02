abbreviations:

- **tf**: terraform

## prototype a

### objectives

- An end-to-end implementation of a node.js microservice where users can make a request and get back a string the microservice returns as a response, with the only authentication required being the GCP API key.
- Requests must not be made directly to the microservice, it must go through API Gateway, and the API Gateway default hostname path corresponding to the microservice should require the API key to be included as a query string (aka [URL parameter](https://www.botify.com/learn/basics/what-are-url-parameters)).
- Since Cloud Run cannot be provisioned without a pre-existing image, a locally executable bash script should be provided to first, enable necessary APIs and create the Artifact Registry repo with tf, second, create the container image and push it to the just created Artifact Registry repo.
  - This bash script will **only need to be run the first time infra is provisioned in a project.**
- Deployed container must be updated when container image source code dev branch is merged to master in github.
  - I.e., have a Continuous Delivery (CD) mechanism (https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment)

### steps

1. Create `variables.tf` file and fill out default values

```
  variable "region" {
    type    = string
    default = ""
  }
  variable "project_id" {
    type    = string
    default = ""
  }
  variable "project_number" {
    type    = string
    default = ""
  }
  variable "service_account_key" {
    type    = string
    default = "
  }
  variable "github_repo_owner" {
    type    = string
    default = ""
  }
  variable "github_repo" {
    type    = string
    default = ""
  }
```

2. Run `bash run-me-first.sh`
3. Connect github repo with all this code to cloud build trigger in the console. Cloud Build ➡️ Triggers ➡️ Manage repos ➡️ Connect repo
4. Run `terraform apply --auto-approve` (you might have to run this again if you get this error)

- `` Request `Enable Project Service "basic-express-api-3ac50ge6prcod.apigateway.chrome-courage-336400.cloud.goog" for project "chrome-courage-336400"` returned error: failed to send enable services request: googleapi: Error 403: Not found or permission denied for service(s): basic-express-api-3ac50ge6prcod.apigateway.chrome-courage-336400.cloud.goog. ``

5. Create an API key to use in making a request to the container using API Gateway's default hostname URL path. APIs and services ➡️ Credentials ➡️ Create credentials

6. Test by hitting the default hostname (aka Gateway URL) with our path and the API key, which should [follow](https://cloud.google.com/api-gateway/docs/deploying-api#defining_the_endpoint_of_the_deployed_api_config) `https://basic-express-gw-<hash>.<region>.gateway.dev/hello?key=<API_key>`

- The region in the Gateway URL above might not be what is in your `variables.tf`, not sure why...
- You can find this URL at API Gateway ➡️ basic-express-api ➡️ Gateways
  - You can also run `gcloud api-gateway gateways describe basic-express-gw --location=<region>`
- If this works the way it should, once hitting this endpoint, you will see something like `response from basic-express app / version:22804d19-5947-4d95-bd69-5a12c0b1d339`

7. Test container image revisions by changing small things like the string in `nodejs-containers/basic-express/server.js`, and push to the main/master branch.

- If the CD with Cloud Build is set up correctly, you should see your changed string when hitting the Gateway URL with our path and the API key

### notes

- If container images are nested in a repo (the way I have it structured here) you have to pay particular attention to the `Dockerfile` and `cloudbuild.yaml`, you can't just copy paste code into these two files from docs because the docs assume you have a flat project/repo structure and the container image source code is not nested, look at these 2 files for more guidance and links.
- If the user doesn't include API key after path API Gateway will return this error message.
  - `{"code":401,"message":"UNAUTHENTICATED:Method doesn't allow unregistered callers (callers without established identity). Please use API Key or other form of API consumer identity to call this API."}`
  - URLs will need to look like this, with `hello` being the path and the `?key...` being the query string.
    - `https://my-gateway-a12bcd345e67f89g0h.uc.gateway.dev/hello?key=<API_key>`
    - The API key can be generated in the "Credentials" page of "APIs & Services"
- If a similar 403 error as below is returned when hitting the URL correctly (with the correct path and API key) it means that the API gateway managed service needs to be enabled (why it's not enabled from the point of provisioning `google_api_gateway_api` tf resource I don't know)
  - `{"message":"PERMISSION_DENIED:API basic-express-api-1yy1jgrw4nwy2.apigateway.chrome-courage-336400.cloud.goog is not enabled for the project.","code":403}`
  - You can enable the API Gateway managed service with [`gcloud services enable <managed_service>`](https://cloud.google.com/sdk/gcloud/reference/services/enable) - **but you don't have to because it's part of the tf code in `apis.tf`**, a service called "managed_service_api_gateway_creates" and it's set up to only provision itself AFTER the API Gateway resource is created.
  - https://stackoverflow.com/a/70523505/8379751
- Why Artifact Registry over Container Registry?
  - "While Container Registry is still available and will continue to be supported as a Google Enterprise API, going forward new features will only be available in Artifact Registry, and Container Registry will only receive critical security fixes." - https://cloud.google.com/blog/products/application-development/understanding-artifact-registry-vs-container-registry
    - https://cloud.google.com/artifact-registry/docs/transition/transition-from-gcr#compare
    - https://cloud.google.com/artifact-registry/docs/transition/changes-gcp#artifact-registry_2
- Why is it important to use [API Gateway](https://cloud.google.com/api-gateway/docs/about-api-gateway#api-gateway) and not make direct API calls to the microservice(s)?
  - "Using API Gateway, app developers consume your REST APIs to implement apps. Because all APIs are hosted on API Gateway, app developers see a consistent interface across all backend services. By deploying your APIs on API Gateway, you can update the backend service, or even move the service from one architecture to another, without having to change the API. As long as the API to your service stays consistent, app developers will not have to modify deployed apps because of underlying changes on your backend."
- "In addition, the gateway service account requires the permissions necessary to access your backend service. For example, if your backend is implemented as a Cloud Function, then the service account should at least be assigned the role of Cloud Functions Invoker. For a Cloud Run backend, the role is Cloud Run Invoker. By limiting the permissions associated with the API config, you can better secure your backend systems. After you create the service account, use the --backend-auth-service-account option to specify the email address of that service account when creating an API config:" - https://cloud.google.com/api-gateway/docs/configure-dev-env?&_ga=2.177696806.-2072560867.1640626239#configuring_a_service_account
- **`resource "google_api_gateway_api_config" "name"` is immutable, if you change the openapi spec file or any arguments in this resource and run `terraform apply` you will get the "resource already exists" error. So you need to destroy this resource (`terraform destroy -target RESOURCE_TYPE.NAME`) and run `terraform apply` again**

## prototype b

### objective

-

## prototype c

### objective

-

## prototype d

### objective

-
