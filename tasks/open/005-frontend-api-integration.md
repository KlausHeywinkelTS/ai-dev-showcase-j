# Task 005: Connect Frontend to Backend API

Status: open

## Goal

Replace local-only task changes with calls to the backend API.

## Scope

- Load tasks from `GET /api/tasks`.
- Create tasks through `POST /api/tasks`.
- Update tasks through `PUT /api/tasks/:id`.
- Delete tasks through `DELETE /api/tasks/:id`.
- Show loading, empty, and error states.

## Acceptance Criteria

- The frontend loads tasks from the backend.
- User actions call the correct backend endpoints.
- The UI updates after successful backend responses.
- Failed loads and saves show clear error messages.
- Refreshing the page reflects the latest backend state when backend storage is available.

## Deploy and Test Checkpoint

Deploy or run locally and verify the full board workflow through the UI.
