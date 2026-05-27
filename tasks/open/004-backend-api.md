# Task 004: Implement Backend API

Status: open

## Goal

Add Node.js backend endpoints for task CRUD operations.

## Scope

- Implement `GET /api/tasks`.
- Implement `POST /api/tasks`.
- Implement `PUT /api/tasks/:id`.
- Implement `DELETE /api/tasks/:id`.
- Add validation and consistent error responses.
- Use temporary local or in-memory storage if S3 is not integrated yet.

## Acceptance Criteria

- API endpoints return JSON responses.
- Invalid task creation returns `400`.
- Unknown task IDs return `404`.
- Successful mutations return updated task data or board data.
- API behavior is covered by tests or documented manual checks.

## Deploy and Test Checkpoint

Deploy or run locally and verify each endpoint with the frontend, a browser, or an API client.
