# Task 006: Add S3 Persistence

Status: open

## Goal

Persist all task data in S3 using `props-demo-bucket/tasks.json`.

## Scope

- Add S3 read and write logic in the backend.
- Use `TASKS_BUCKET` and `TASKS_OBJECT_KEY` environment variables with documented defaults.
- Initialize an empty board when `tasks.json` does not exist.
- Ensure the frontend never accesses S3 directly.

## Acceptance Criteria

- The backend reads tasks from `s3://props-demo-bucket/tasks.json`.
- The backend writes the full updated board state after each mutation.
- Missing `tasks.json` is handled as an empty task list.
- S3 failures produce clear `500` responses.
- Refreshing the app preserves task changes.

## Deploy and Test Checkpoint

Deploy or run in an environment with AWS credentials and verify that changes are written to and reloaded from S3.
