abbreviations:

- **tf**: terraform

## prototype a

### objectives

- An end-to-end implementation of a node.js microservice where users can make a request and get back a string the microservice returns as a response, with the only authentication required being the GCP API key.
- Requests must not be made directly to the microservice, it must go through API Gateway, and the API Gateway default hostname path corresponding to the microservice should require the API key to be included as a query string (aka [URL parameter](https://www.botify.com/learn/basics/what-are-url-parameters)).
- Since Cloud Run cannot be provisioned without a pre-existing image, a locally executable bash script should be provided to first, enable necessary APIs and create the Artifact Registry repo with tf, second, create the container image and push it to the just created Artifact Registry repo.
  - This bash script will **only need to be run the first time infra is provisioned in a project.**

### notes

- If user doesn't include API key after path API Gateway will return this error message.
  - `{"code":401,"message":"UNAUTHENTICATED:Method doesn't allow unregistered callers (callers without established identity). Please use API Key or other form of API consumer identity to call this API."}`
  - URLs will need to look like this, with `hello` being the path and the `?key...` being the query string.
    - `https://my-gateway-a12bcd345e67f89g0h.uc.gateway.dev/hello?key=<API_key>`
    - The API key can be generated in the "Credentials" page of "APIs & Services"
- If a similar 403 error as below is returned when hitting the URL correctly (with the correct path and API key) it means that the API gateway managed service needs to be enabled (why it's not enabled from the point of provisioning I don't know)
  - `{"message":"PERMISSION_DENIED:API basic-express-api-1yy1jgrw4nwy2.apigateway.chrome-courage-336400.cloud.goog is not enabled for the project.","code":403}`
  - Enable the API Gateway managed service with [`gcloud services enable <managed_service>`](https://cloud.google.com/sdk/gcloud/reference/services/enable)
  - https://stackoverflow.com/a/70523505/8379751

## prototype b

### objective

-

## prototype c

### objective

-

## prototype d

### objective

-
