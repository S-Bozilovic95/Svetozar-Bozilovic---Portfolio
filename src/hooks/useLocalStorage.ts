import { useEffect, useState } from "react";

/** useState that survives reloads. Storage can be blocked, so every access is guarded. */
export const useLocalStorage = <T extends string>(key: string, fallback: T) => {
  const [value, setValue] = useState<T>(() => {
    try {
      return (localStorage.getItem(key) as T | null) ?? fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // storage is not available, the value just lives in memory
    }
  }, [key, value]);

  return [value, setValue] as const;
};
