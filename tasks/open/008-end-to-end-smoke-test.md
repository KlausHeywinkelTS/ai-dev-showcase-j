# Task 008: Complete End-to-End Smoke Test

Status: open

## Goal

Verify the deployed app works end to end with real S3 persistence.

## Scope

- Test the deployed Amplify app.
- Exercise the complete task lifecycle.
- Confirm persistence after refresh.
- Document any known limitations.

## Acceptance Criteria

- A task can be created in the deployed app.
- The task can be edited.
- The task can be moved through all statuses.
- The task can be deleted.
- Refreshing the page preserves the latest state.
- The final state is visible in `props-demo-bucket/tasks.json`.

## Deploy and Test Checkpoint

Use the deployed Amplify URL and complete the full smoke test before moving this task to `tasks/closed`.
