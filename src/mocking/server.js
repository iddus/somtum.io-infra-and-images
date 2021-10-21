import { createServer } from "miragejs";
import buckets from "./buckets";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/buckets", () => {
        return buckets;
      });
    },
  });
  return server;
}

// https://miragejs.com/quickstarts/react/develop-an-app/#step-2-define-your-shared-server
