import CloseIcon from "@mui/icons-material/Close";
import {
  Snackbar,
  IconButton,
  Link,
  SnackbarContent,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useTranslation, Trans } from "gatsby-plugin-react-i18next";
import Cookies from "js-cookie";
import { forwardRef, useState } from "react";

import type { Breakpoint } from "@mui/material/styles";
import type { ReactNode } from "react";

import { useBreakPoint } from "@/hooks/useBreakPoint";

interface CookieAlertContentProps {
  breakpoints: Breakpoint[];
  action: ReactNode;
  message: ReactNode;
}

/**
 * クッキーアラートのコンテンツ部
 */
const CookieAlertContent = forwardRef<HTMLDivElement, CookieAlertContentProps>(
  ({ breakpoints, action, message }, ref) => {
    const width = useBreakPoint();
    return (
      <SnackbarContent
        ref={ref}
        css={{
          flexDirection: "row",
          flexWrap: "nowrap",
          alignItems: "flex-center",
          wordBreak: "keep-all",
          whiteSpace: "nowrap",
        }}
        action={action}
        message={
          <Typography
            variant={breakpoints.includes(width) ? "caption" : "body2"}
            component="div"
          >
            {message}
          </Typography>
        }
      />
    );
  }
);

CookieAlertContent.displayName = "CookieAlertContent";

export interface CookieAlertProps {
  cookieName?: string;
  cookieValue?: string;
  cookieOptions?: Cookies.CookieAttributes;
}

/**
 * クッキーアラート
 */
export const CookieAlert = ({
  cookieName = "cookie-licence",
  cookieValue = "1",

  cookieOptions = {
    expires: 790,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "Strict",
  },
}: CookieAlertProps): JSX.Element => {
  const breakpoints: Breakpoint[] = ["xs", "sm"];
  const [agree, setAgree] = useState(Cookies.get(cookieName));
  const { t } = useTranslation();
  const width = useBreakPoint();

  const handleClose = (): void => {
    Cookies.set(cookieName, cookieValue, cookieOptions);
    setAgree(cookieValue);
  };

  return (
    <Snackbar open={agree === undefined}>
      <CookieAlertContent
        breakpoints={breakpoints}
        action={
          <IconButton
            aria-label="close"
            title="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        }
        message={
          <aside>
            {t("cookie-alert.title")}
            {breakpoints.includes(width) ? <br /> : " "}
            <Trans i18nKey="cookie-alert.description">
              詳しくは
              <Link
                component={RouterLink}
                to="/privacy"
                color="inherit"
                underline="always"
              >
                Cookieポリシー
              </Link>
              をご覧ください。
            </Trans>
          </aside>
        }
      />
    </Snackbar>
  );
};
