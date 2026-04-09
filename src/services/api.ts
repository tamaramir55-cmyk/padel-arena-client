import API_BASE from "../config";

function buildHeaders(token?: string): HeadersInit {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

export async function get<T = unknown>(
  path: string,
  token?: string,
): Promise<T> {
  const url: string = `${API_BASE}${path}`;
  const res: Response = await fetch(url, { headers: buildHeaders(token) });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || "Network response was not ok");
  }
  return (await res.json()) as T;
}

export async function post<T = unknown>(
  path: string,
  body?: unknown,
  token?: string,
): Promise<T> {
  const url: string = `${API_BASE}${path}`;
  const res: Response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(token),
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText);
    throw new Error(text || "Network response was not ok");
  }
  return (await res.json()) as T;
}
