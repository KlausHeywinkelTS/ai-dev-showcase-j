# Storage Specification

## S3 Location

Task data must be stored in:

- Bucket: `props-demo-bucket`
- Object key: `tasks.json`

## Object Format

The object must contain valid JSON:

```json
{
  "tasks": []
}
```

## Access

Only the backend should read from and write to S3. The frontend must use the backend API and must not access S3 directly.

## Initialization

If `tasks.json` does not exist, the backend initializes the app with:

```json
{
  "tasks": []
}
```

The backend should create the object on the first successful write.

## Consistency

Because the full task list is stored as one object, each write replaces the complete `tasks.json` content. The implementation should keep the app simple and avoid concurrent editing features unless explicitly added later.

## Configuration

The bucket name and object key should be configurable through environment variables, with these defaults:

- `TASKS_BUCKET=props-demo-bucket`
- `TASKS_OBJECT_KEY=tasks.json`
