# Backend API Specification

## Runtime

The backend must run on Node.js and expose HTTP endpoints for the frontend. It may be implemented as an Amplify-compatible serverless API or as a Node.js service that fits the selected Amplify deployment setup.

## Endpoints

### `GET /api/tasks`

Returns the current task list.

Successful response:

```json
{
  "tasks": []
}
```

### `POST /api/tasks`

Creates a task.

Request body:

```json
{
  "title": "New task",
  "description": "Optional description"
}
```

### `PUT /api/tasks/:id`

Updates an existing task.

Editable fields:

- `title`
- `description`
- `status`

### `DELETE /api/tasks/:id`

Deletes an existing task.

## Error Handling

- Invalid request bodies return `400`.
- Unknown task IDs return `404`.
- S3 read or write failures return `500`.
- Error responses include a clear message for the frontend to display or log.

## Persistence Behavior

Each mutating endpoint must:

1. Read the latest task list from S3.
2. Apply the requested change.
3. Validate the resulting task list.
4. Write the full updated `tasks.json` object back to S3.
5. Return the updated task or task list.
