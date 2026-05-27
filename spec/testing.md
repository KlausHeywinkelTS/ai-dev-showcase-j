# Testing Specification

## Test Levels

The project should include focused tests that match the implementation size:

- Unit tests for task validation and data transformations.
- API tests for task CRUD behavior.
- UI tests for core board interactions.
- Manual deployment verification after Amplify deployment.

## Required Test Scenarios

- Loading an empty board.
- Loading existing tasks.
- Creating a task.
- Editing a task.
- Moving a task to another status.
- Deleting a task.
- Handling a failed load.
- Handling a failed save.

## Manual Smoke Test

After each task in `tasks/open` is implemented and deployed:

1. Open the app locally or through the Amplify preview.
2. Confirm the app loads without console errors.
3. Execute the acceptance criteria for the completed task.
4. Refresh the page and confirm persisted state where applicable.

## Completion Rule

A task can move from `tasks/open` to `tasks/closed` only when:

- The implementation is complete.
- Acceptance criteria are met.
- Relevant automated checks pass or the manual test result is documented.
- The app remains deployable.
