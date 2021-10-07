Code divided by projects (not in the GCP resource hierarchy "project" sense), project naming convention is: "demo-" followed by a number, info below will delineate what each project does, state associated deliverables and have related notes and links

Naming convention:

- components/component groupings: `PascaleCase`
- custom hooks: kebab-case, e.g., `use-http.js`
- context: kebab-case, e.g., `sample-context.js`
- tasks's status indicated with ✅/❌/🚧

## _Demo1_

Objective: Use custom hooks to allow user to create, read, update and destroy buckets in GCP\
Tasks & notes:

1. Create basic app structure, App.js should render ListBuckets.js, CreateUpdateBucket.js\
   _ListBuckets.js should have 'Delete'/'Update' button, and CreateUpdateBucket.js should be a modal that pops up if 'Update' is clicked_
   _All components should have simple tests_
2. Use modal component in UI dir to render a form when 'Update' clicked, or when user chooses to 'Create'\
   _Should be modular enough to show specific information useful for 'Update' or 'Create'_
   _Use whatever the slots equivalent for React is_
   _Should have simple tests_
3. Create a simple node.js file to get the SDK methods right before proceeding to build out the backend
   _It's not possible to use the node SDK in frontend apps, so will have to create a proper backend with API Gateway and Cloud Run microservices_
4. Copy Max's `use-http.js` custom hook to allow for GET, POST, PUT/PATCH, DESTROY requests\
   _URLs will differ based on operations, as each operation is being executed by a separate microservice_
