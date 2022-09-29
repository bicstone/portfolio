import CloseIcon from "@mui/icons-material/Close";
import { Snackbar, IconButton, Link } from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";

import { CookieAlertContent } from "./AlertContent";
import { useCookieAgree } from "./useCookieAgree";

import type { Breakpoint } from "@mui/material/styles";

import { useBreakPoint } from "@/hooks/useBreakPoint";

/**
 * Cookie Alert
 */
export const CookieAlert = (): JSX.Element => {
  const breakpoints: Breakpoint[] = ["xs", "sm"];
  const { isAgree, setAgree } = useCookieAgree();
  const { t } = useTranslation();
  const width = useBreakPoint();

  return (
    <Snackbar open={!isAgree}>
      <CookieAlertContent
        breakpoints={breakpoints}
        action={
          <IconButton
            aria-label="close"
            title="close"
            color="inherit"
            onClick={setAgree}
          >
            <CloseIcon />
          </IconButton>
        }
        message={
          <>
            {t("cookie-alert.title")}
            {breakpoints.includes(width) ? <br /> : " "}
            <Trans i18nKey="cookie-alert.description">
              See
              <Link
                component={RouterLink}
                to="/privacy"
                color="inherit"
                underline="always"
              >
                Cookie Policy
              </Link>
              for details.
            </Trans>
          </>
        }
      />
    </Snackbar>
  );
};
