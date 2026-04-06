const API_BASE = import.meta.env.VITE_API_URL || '/api'

function buildHeaders(token) {
  const headers = { 'Content-Type': 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`
  return headers
}

export async function get(path, token) {
  const res = await fetch(`${API_BASE}${path}`, { headers: buildHeaders(token) })
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

export async function post(path, body, token) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}
