export function publicAsset(path: string) {
  if (path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}
