# App Implementation Todo List

This list breaks the Kanban to-do app into user-testable implementation steps. Each task has a status of `open` or `done`, acceptance criteria, and a deployment check. After every task, a user should be able to deploy the current state to AWS Amplify Hosting and see a clear effect.

## 1. Deployable Project Skeleton

Status: `done`

Build the initial Node.js project structure and make the repository deployable to AWS Amplify Hosting with a minimal static page.

Acceptance criteria:

- The project has a `package.json` with clear `start`, `dev`, `build`, and `test` scripts.
- The frontend has an `index.html`, CSS entry point, and JavaScript entry point.
- The backend has a clear folder for future API code and task modules.
- The repository includes an Amplify-compatible build configuration, for example `amplify.yml`.
- Running the documented local command starts the placeholder app without errors.
- Running the documented build command creates the same frontend output that Amplify will publish.

Deployment check:

- The app can be deployed to AWS Amplify Hosting after this task.
- The deployed page shows a visible placeholder screen with the app name and a note that the Kanban board is coming next.

## 2. Static Kanban Board Layout

Status: `done`

Replace the placeholder with the main board page using the existing desktop and mobile prototypes as the visual reference.

Acceptance criteria:

- The page shows an app header with the app name, short subtitle, and `New Task` action.
- The board always shows the `To Do`, `In Progress`, and `Done` columns.
- Each column shows a title, task count, and empty-state text.
- On desktop, the columns are displayed side by side.
- On mobile, the columns stack vertically and remain easy to read.

Deployment check:

- The deployed app no longer shows the placeholder.
- The deployed app shows the static Kanban board layout on both desktop and mobile screen widths.

## 3. Frontend Task Rendering

Status: `done`

Render task cards from JavaScript data before connecting the backend.

Acceptance criteria:

- Sample tasks appear in the correct columns based on their status.
- Each card shows the task title, optional description preview, status indication, and edit/delete actions.
- Long titles wrap instead of overflowing.
- Long descriptions are truncated on cards.
- Empty columns remain visible when no tasks match their status.

Deployment check:

- The deployed app shows sample task cards in the board.
- Refreshing the deployed app restores the same sample data because the data is still static.

## 4. Task Form UI

Status: `done`

Add the create and edit task form UI without persistence yet.

Acceptance criteria:

- Clicking `New Task` opens a form with title, description, and status fields.
- The title field is required and shows validation feedback when empty.
- The description field is optional.
- Save and cancel actions are available.
- While saving, the save action is disabled and gives lightweight progress feedback.

Deployment check:

- In the deployed app, the user can open and close the task form.
- In the deployed app, submitting an empty title shows validation feedback.

## 5. Frontend Task Interactions

Status: `done`

Support creating, editing, deleting, and moving tasks in the browser with temporary in-memory data.

Acceptance criteria:

- A user can create a task with at least a title.
- A user can edit a task title and description.
- A user must confirm before deleting a task.
- A user can move a task between `To Do`, `In Progress`, and `Done`.
- Moving tasks works with a non-drag alternative such as a status dropdown or move buttons.

Deployment check:

- In the deployed app, the user can create, edit, move, and delete tasks during the current browser session.
- Refreshing the deployed app resets the data, making it clear that persistence has not been added yet.

## 6. Drag-and-Drop Movement

Status: `done`

Add drag-and-drop task movement while keeping the non-drag movement option.

Acceptance criteria:

- A task card can be dragged from one column to another.
- Dropping a task updates its status and column count.
- Drag-and-drop has visible feedback while moving a card.
- The non-drag movement option still works after drag-and-drop is added.

Deployment check:

- In the deployed app, a user can move a task with drag-and-drop.
- In the deployed app, a user can still move the same task without drag-and-drop.

## 7. Backend Task API With Mock Repository

Status: `done`

Create the REST-style task API using an in-memory or mock repository so the API shape is deployable before durable persistence is added.

Acceptance criteria:

- `GET /api/tasks` returns all tasks.
- `POST /api/tasks` creates a task with a generated `id`, timestamps, and valid status.
- `GET /api/tasks/:id` returns one task or a clear not-found response.
- `PATCH /api/tasks/:id` updates title, description, or status.
- `DELETE /api/tasks/:id` removes a task.
- Invalid requests return clear validation errors.
- Route handling, controller logic, service logic, and repository access are separated.

Deployment check:

- The deployed environment exposes a task API health or task-list endpoint that can be opened or tested from the browser.
- The deployed API returns JSON, even if the data is still non-durable.

## 8. Frontend API Integration

Status: `done`

Connect the deployed frontend to the deployed backend API.

Acceptance criteria:

- The board loads tasks from `GET /api/tasks`.
- Creating, editing, moving, and deleting tasks call the backend API.
- The frontend API base URL is configurable for local and deployed environments.
- The UI clearly reflects successful API responses.

Deployment check:

- In the deployed app, task actions go through the deployed API instead of local in-memory-only frontend state.
- The browser network panel shows calls to the configured API URL.

## 9. Local File Repository

Status: `open`

Add a local JSON-file repository so the full app can be tested locally before S3 is configured.

Acceptance criteria:

- Task data is stored in a stable JSON shape with a top-level `tasks` array.
- Tasks persist after restarting the local backend.
- The repository handles a missing data file by returning an empty task list.
- The JSON file can be inspected manually and matches the documented data model.

Deployment check:

- The deployed app still works with the deployed repository configuration from the previous task.
- The README clearly marks local file persistence as local-only and explains that deployed persistence comes in the S3 task.

## 10. Loading and Error States

Status: `open`

Implement user-facing loading, retry, and action failure states.

Acceptance criteria:

- The app shows a loading indicator while tasks are fetched.
- If tasks cannot be loaded, the app shows `Tasks could not be loaded. Please try again.` or equivalent clear text.
- A retry action is available after a load failure.
- Failed create, update, move, or delete actions show a clear message.
- Failed actions do not silently remove or lose tasks from the UI.

Deployment check:

- The deployed app shows a loading state during task fetches.
- With a temporarily invalid API URL or simulated API error, the deployed app shows the error and retry UI.

## 11. S3 Repository

Status: `open`

Implement S3-backed task persistence for deployed environments.

Acceptance criteria:

- The backend reads task data from `TASKS_S3_BUCKET` and `TASKS_S3_KEY`.
- The backend writes updates back to the same S3 object.
- The stored S3 object uses the stable top-level `tasks` array shape.
- Required environment variables are `AWS_REGION`, `TASKS_S3_BUCKET`, and `TASKS_S3_KEY`.
- The frontend never accesses S3 directly.
- The backend deployment role has permission to read and write the configured S3 object.

Deployment check:

- In the deployed app, a user can create or update a task, refresh the page, and still see the changed data.
- The configured S3 object can be inspected and contains the same task data in the documented JSON shape.

## 12. Accessibility Pass

Status: `open`

Make the deployed app usable with keyboard navigation and accessible form feedback.

Acceptance criteria:

- All actions can be reached and triggered by keyboard.
- Interactive elements have visible focus states.
- Form fields have labels.
- Validation messages are associated with the relevant fields.
- Text contrast is readable in the implemented design.
- Drag-and-drop still has a non-drag alternative.

Deployment check:

- In the deployed app, the main create, edit, move, and delete flow can be completed using only the keyboard.
- Visible focus states can be checked directly in the deployed app.

## 13. Automated Tests

Status: `open`

Add focused tests for backend behavior and main frontend interactions.

Acceptance criteria:

- Task service tests cover create, update, move, delete, validation, and not-found cases.
- Repository tests cover empty data and persisted task data.
- Frontend interaction tests cover rendering, create, edit, move, delete, loading, and error states.
- `npm test` runs the automated test suite successfully.
- The build fails if tests fail.

Deployment check:

- Amplify runs the test command during the build or the deployment documentation explains the pre-deploy test gate.
- A successful deployment means the test suite passed for the deployed commit.

## 14. Local Run and Deployment Documentation

Status: `open`

Document how a user can run, test, and deploy the app.

Acceptance criteria:

- The README explains how to install dependencies.
- The README explains how to start the frontend and backend locally.
- The README documents required and optional environment variables.
- The README explains how AWS Amplify Hosting builds and publishes the app.
- The README includes a short manual test flow for creating, moving, editing, deleting, reloading, and checking deployed persistence.

Deployment check:

- The deployed app contains a visible version, build timestamp, commit hash, or equivalent footer/debug detail.
- After deployment, the user can match the deployed version information to the current repository state.

## 15. Production Deployment Hardening

Status: `open`

Tighten the Amplify deployment configuration and production runtime behavior.

Acceptance criteria:

- Build commands are documented and work locally.
- Runtime environment variables needed for the API and S3 persistence are documented.
- The deployed frontend calls the deployed backend through the configured API URL.
- The app handles missing or invalid deployment configuration with clear errors.
- Production builds do not expose secrets in frontend assets.

Deployment check:

- A clean Amplify rebuild succeeds from the repository without manual code changes.
- The deployed app works after clearing browser cache and opening a fresh session.

## 16. End-to-End User Verification

Status: `open`

Verify the complete app flow in the deployed environment.

Acceptance criteria:

- A user can open the deployed app and see the Kanban board.
- A user can create a task, move it through all statuses, edit it, and delete it.
- The task state persists after page reload.
- The app works on both desktop and mobile screen widths.
- Load and action errors show clear feedback when simulated.

Deployment check:

- The deployed app passes the full manual user flow from the README.
- The deployed app is ready to be shared as the development showcase.
