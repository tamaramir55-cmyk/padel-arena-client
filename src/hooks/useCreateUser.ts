import { useState } from "react";
import { CreateUserDto } from "../types/users/creat-user-dto";
import { API_BASE } from "../utils/api-base";

const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function createUser(payload: CreateUserDto) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/api/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        const message = body?.message || res.statusText || "Server error";
        throw new Error(message);
      }

      const data = await res.json().catch(() => null);
      setLoading(false);
      return data;
    } catch (err: any) {
      setError(err?.message || "Unknown error");
      setLoading(false);
      throw err;
    }
  }

  return { createUser, loading, error };
};

export default useCreateUser;
