import { useCallback, useMemo } from "react";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSiteMetadata } from "@/hooks/useSiteMetadata";

const LOCAL_STORAGE_KEY = "cookie-agree";

/**
 * Cookie Agree
 */
export const useCookieAgree = (): {
  readonly isAgree: boolean;
  readonly setAgree: () => void;
} => {
  const [cookieAgree, setCookieAgree] =
    useLocalStorage<number>(LOCAL_STORAGE_KEY);
  const { privacyPolicyVersion } = useSiteMetadata();

  const isAgree = useMemo(() => {
    return cookieAgree === privacyPolicyVersion;
  }, [cookieAgree, privacyPolicyVersion]);

  const setAgree = useCallback(() => {
    setCookieAgree(privacyPolicyVersion);
  }, [privacyPolicyVersion, setCookieAgree]);

  return { isAgree, setAgree } as const;
};
