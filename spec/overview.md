# Kanban To-Do App Specification

## Goal

Build a simple Kanban-style to-do-list web app with a frontend and backend that can be deployed directly from this repository to AWS Amplify Hosting.

The app must use Node.js and store task data in S3:

- Bucket: `props-demo-bucket`
- Object key: `tasks.json`

## Product Scope

The app lets users manage tasks across Kanban columns. Users can create, view, move, edit, and delete tasks. The current board state is persisted in S3 so it survives reloads and deployments.

## Modules

- `ui.md`: User interface and interaction requirements.
- `data-model.md`: Task and board data structures.
- `backend-api.md`: Backend API behavior.
- `storage.md`: S3 persistence requirements.
- `deployment.md`: AWS Amplify deployment expectations.
- `testing.md`: Testing and verification requirements.

## Non-Goals

- User authentication.
- Multi-user collaboration.
- Real-time synchronization.
- Complex workflow automation.

## Definition of Done

- The app can be installed and run locally with documented Node.js commands.
- The frontend can display and update a Kanban board.
- The backend reads and writes `tasks.json` in `props-demo-bucket`.
- The repository structure is compatible with AWS Amplify Hosting deployment.
- Each implementation task leaves the app in a deployable and testable state.
