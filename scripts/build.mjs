import { cp, mkdir, rm, stat } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const checkOnly = process.argv.includes("--check");

async function pathExists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

const requiredFiles = ["index.html", "src/main.js", "src/styles.css"];

for (const file of requiredFiles) {
  const exists = await pathExists(resolve(root, file));

  if (!exists) {
    throw new Error(`Missing required build input: ${file}`);
  }
}

if (!checkOnly) {
  await rm(dist, { force: true, recursive: true });
  await mkdir(dist, { recursive: true });
  await cp(resolve(root, "index.html"), resolve(dist, "index.html"));
  await cp(resolve(root, "src"), resolve(dist, "src"), { recursive: true });
}

console.log(checkOnly ? "Build inputs verified." : "Build completed in dist/.");
