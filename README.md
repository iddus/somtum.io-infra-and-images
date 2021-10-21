Code divided by projects (not in the GCP resource hierarchy "project" sense), project naming convention is: "demo-" followed by a number, info below will delineate what each project does, state associated deliverables and have related notes and links

Naming convention:

- components/component groupings: `PascaleCase`
- custom hooks: kebab-case, e.g., `use-http.js`
- context: kebab-case, e.g., `sample-context.js`
- tasks's status indicated with ✅/❌/🚧

## _Demo1_

Objective: Use custom hooks to allow user to create, read, update and destroy buckets in GCP\
Tasks & notes:

1. Create basic app structure - App.js should render ListBuckets.js, and ListBuckets should render UpdateBucket.js and DeleteBucket.js\
   _ListBuckets.js should have 'Delete'/'Update' button, and corresponding components should be rendered conditionally based on what's selected, each one of these components will render the reusable Modal.js with some basic custom content_ ✅\
   _App.js and ListBuckets.js components should have simple tests_ 🚧
2. Use modal component in UI dir to render a form when 'Update' clicked, or when user chooses to 'Create'\
   _Should be modular enough to show specific information useful for 'Update' or 'Create'_
   _Use whatever the slots equivalent for React is_\
   _UpdateBucket.js, Modal.js and DeleteBucket.js components should have simple tests_ 🚧
3. Create a simple Node.js file and play around with Cloud Storage Node.js SDK methods to get a feel for what the backend will need to have, and also to structure the mirage.js mock data
   _It's not possible to use the node SDK in frontend apps, so will have to create a proper backend with API Gateway and Cloud Run microservices, Cloud Run microservices will use Node.js and Express.js to provide data_
   _Use this Node.js script to get a list of all buckets in the project, and copy for mirage.js_
4. Copy Max's `use-http.js` custom hook to allow for GET, POST, PUT/PATCH, DESTROY requests\
   _URLs will differ based on operations, as each operation is being executed by a separate microservice_
   _Use this custom hook to make mock API call to get the list of buckets to ListBuckets.js component_ 🚧
   _Render the bucket data in the existing table_
