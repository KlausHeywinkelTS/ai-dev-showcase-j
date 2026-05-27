import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const requestedRoot = process.argv[2] ?? ".";
const publicRoot = resolve(root, requestedRoot);
const port = Number(process.env.PORT ?? 5173);

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
]);

function getContentType(pathname) {
  return contentTypes.get(extname(pathname)) ?? "application/octet-stream";
}

async function resolveFile(url) {
  const pathname = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const normalized = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = resolve(publicRoot, `.${normalized}`);

  if (!filePath.startsWith(publicRoot)) {
    return null;
  }

  try {
    const info = await stat(filePath);

    if (info.isFile()) {
      return filePath;
    }
  } catch {
    // Fall back to the app shell for client-side routes.
  }

  return join(publicRoot, "index.html");
}

const server = createServer(async (request, response) => {
  const filePath = await resolveFile(request.url ?? "/");

  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  response.writeHead(200, { "Content-Type": getContentType(filePath) });
  createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`Kanban app available at http://localhost:${port}`);
});
