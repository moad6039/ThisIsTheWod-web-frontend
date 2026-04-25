// app/lib/api.ts
// Centralise les appels vers le backend Express autonome.

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "Unknown error");
    throw new Error(`API error ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

// ── Helpers nommés (utilisés dans les screens) ─────────────────────────────────

export const api = {
  // Users
  signUp: (body: object) =>
    apiFetch("/users/signup", { method: "POST", body: JSON.stringify(body) }),
  signIn: (body: object) =>
    apiFetch("/users/signin", { method: "POST", body: JSON.stringify(body) }),
  getMe: (token: string) => apiFetch(`/users/me/${token}`),

  // WODs
  generate: (body: object) =>
    apiFetch("/wods/generate", { method: "POST", body: JSON.stringify(body) }),
  save: (body: object) =>
    apiFetch("/wods/save", { method: "POST", body: JSON.stringify(body) }),
  getHistory: (userToken: string) => apiFetch(`/wods/history/${userToken}`),
  getFavorites: (userToken: string) => apiFetch(`/wods/favorites/${userToken}`),
  toggleFavorite: (wodToken: string) =>
    apiFetch(`/wods/${wodToken}/favorite`, { method: "PATCH" }),
};
