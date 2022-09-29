import { useState, useCallback } from "react";

import { isDefined } from "@/utils/typeguard";

export const useLocalStorage = <T>(
  key: string
): readonly [T | null, (value: T) => void] => {
  const initialState = useCallback(() => {
    if (!isDefined(window)) {
      return null;
    }

    try {
      const item = window.localStorage.getItem(key);
      const state = isDefined(item) ? (JSON.parse(item) as T) : null;
      return state;
    } catch {
      // has storage restriction
      return null;
    }
  }, [key]);

  const [storedValue, setStoredValue] = useState<T | null>(initialState);

  const setValue = useCallback(
    (value: T): void => {
      setStoredValue(value);

      if (!isDefined(window)) {
        return;
      }

      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch {
        // has storage restriction
      }
    },
    [key]
  );

  return [storedValue, setValue] as const;
};
