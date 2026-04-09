import { useState, useCallback } from "react";
import { post } from "../services/api";

export type CreateUserDto = {
  email: string;
  firstName?: string;
  lastName?: string;
  passwordHash: string;
};

type CreateUserResult = {
  id: string;
};

type UseCreateUserReturn = {
  createUser: (dto: CreateUserDto) => Promise<CreateUserResult>;
  loading: boolean;
  error: string | null;
};

export default function useCreateUser(): UseCreateUserReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = useCallback(
    async (dto: CreateUserDto): Promise<CreateUserResult> => {
      setLoading(true);
      setError(null);
      try {
        const res = await post<CreateUserResult>("/auth/signup", dto);
        return res;
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err);
        setError(message);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return { createUser, loading, error };
}
