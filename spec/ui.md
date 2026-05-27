# UI Specification

## Layout

The UI must show a Kanban board with three columns:

- `To Do`
- `In Progress`
- `Done`

Each column contains task cards. The page should work on desktop and remain usable on narrow screens by stacking or horizontally scrolling columns.

## Task Card

Each task card must display:

- Title
- Description, if provided
- Current status
- Creation date or last updated date

## Interactions

Users must be able to:

- Create a new task.
- Edit an existing task.
- Delete a task.
- Move a task between columns.
- Reload the page and see the latest persisted board state.

Moving tasks can be implemented with buttons, a status selector, or drag and drop. The first implementation should favor reliability and testability over advanced interaction design.

## Empty and Loading States

- While data is loading, the UI shows a clear loading state.
- If no tasks exist, each empty column shows an empty-state message.
- If loading or saving fails, the UI shows an error message with a retry option where appropriate.

## Accessibility

- All controls must be keyboard accessible.
- Buttons and inputs must have clear labels.
- Status changes must be possible without drag and drop.
- Color must not be the only indicator of task status.
