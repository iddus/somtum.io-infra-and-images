abbreviations:

- **tf**: terraform

## prototype a

### objectives

- An end-to-end implementation of a node.js microservice where users can make a request and get back a string the microservice returns as a response, with the only authentication required being the GCP API key.
- Requests must not be made directly to the microservice, it must go through API Gateway, and the API Gateway default hostname path corresponding to the microservice should require the API key to be included as a query string (aka [URL parameter](https://www.botify.com/learn/basics/what-are-url-parameters)).
- Since Cloud Run cannot be provisioned without a pre-existing image, a bash script should be provided to first, enable necessary APIs and create the Artifact Registry repo with tf, second, create the container image and push it to the created repo using `gcloud` command(s), third deploy the remaining tf resources to provision entire infra.
  - This bash script will **only need to be run the first time infra is provisioned in a project.**

### notes

- If user doesn't include API key after path API Gateway will return this error message.
  - `{"code":401,"message":"UNAUTHENTICATED:Method doesn't allow unregistered callers (callers without established identity). Please use API Key or other form of API consumer identity to call this API."}`
  - URLs will need to look like this, with `hello` being the path and the `?key...` being the query string.
    - `https://my-gateway-a12bcd345e67f89g0h.uc.gateway.dev/hello?key=<API_key>`
    - The API key can be generated in the "Credentials" page of "APIs & Services"

## prototype b

### objective

-

## prototype c

### objective

-

## prototype d

### objective

-