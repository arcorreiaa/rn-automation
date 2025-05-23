import fs from "fs-extra";

export async function readJSON<T = any>(path: string): Promise<T> {
  return await fs.readJSON(path);
}

export async function writeJSON(path: string, data: any): Promise<void> {
  await fs.writeJson(path, data, { spaces: 2 });
}

export function fileExists(path: string): boolean {
  return fs.existsSync(path);
}
