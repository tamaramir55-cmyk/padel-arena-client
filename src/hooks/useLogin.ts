import { useState, useCallback } from "react";
import { post } from "../services/api";

type LoginCredentials = {
  email: string;
  password: string;
};

type LoginResult = {
  accessToken: string;
  [key: string]: unknown;
};

type UseLoginReturn = {
  login: (credentials: LoginCredentials) => Promise<LoginResult>;
  loading: boolean;
  error: string | null;
  data: LoginResult | null;
};

export default function useLogin(): UseLoginReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<LoginResult | null>(null);

  const login = useCallback(
    async (credentials: LoginCredentials): Promise<LoginResult> => {
      setLoading(true);
      setError(null);
      try {
        const res = await post<LoginResult>("/auth/login", credentials);
        setData(res);
        return res;
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message || "Unknown error");
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { login, loading, error, data };
}
