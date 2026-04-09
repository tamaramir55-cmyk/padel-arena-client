// Centralized runtime config for the client
const env = (import.meta as ImportMeta & { env: Record<string, string | undefined> }).env

const API_BASE: string = env.VITE_API_URL ?? '/api'

export default API_BASE
export const VITE_API_URL: string = env.VITE_API_URL ?? ''
