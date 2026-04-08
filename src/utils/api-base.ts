// read API base from Vite env, fallback to the production URL
export const API_BASE =
  (import.meta as any).env?.VITE_API_URL ||
  "https://padel-arena-server.onrender.com";