# Task 007: Configure Amplify Deployment

Status: open

## Goal

Prepare the repository for deployment through AWS Amplify Hosting.

## Scope

- Add or update Amplify build configuration if needed.
- Document required environment variables.
- Confirm build output paths.
- Confirm backend API deployment approach.
- Confirm S3 permissions for the deployed backend.

## Acceptance Criteria

- Amplify can install dependencies and build the app from the repository.
- Required environment variables are documented.
- The deployed frontend can reach the deployed backend.
- The deployed backend can read and write `props-demo-bucket/tasks.json`.
- Deployment steps are documented in the repository.

## Deploy and Test Checkpoint

Deploy through Amplify and verify the app URL loads successfully.
