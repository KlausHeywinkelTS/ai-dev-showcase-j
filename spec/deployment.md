# Deployment Specification

## Target

The repository must be deployable through AWS Amplify Hosting from the connected Git repository.

## Requirements

- Use Node.js for install, build, and runtime tooling.
- Keep build commands documented in the repository.
- Keep required environment variables documented.
- Ensure the deployed app can call its backend API.
- Ensure the backend has permission to read and write `s3://props-demo-bucket/tasks.json`.

## Expected Repository Shape

The implementation may use a single full-stack Node.js project or separate frontend and backend folders. The selected structure must be compatible with Amplify Hosting and should avoid manual deployment steps after code is pushed.

## Environment Variables

- `TASKS_BUCKET`: S3 bucket name. Default: `props-demo-bucket`.
- `TASKS_OBJECT_KEY`: S3 object key. Default: `tasks.json`.
- `AWS_REGION`: AWS region used by the backend.

## Deployment Verification

After deployment:

- The app loads successfully from the Amplify URL.
- The board displays tasks from S3.
- Creating, editing, moving, and deleting tasks works in the deployed environment.
- Refreshing the page keeps the latest task state.
