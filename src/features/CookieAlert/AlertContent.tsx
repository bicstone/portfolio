import { SnackbarContent, Typography } from "@mui/material";
import { forwardRef } from "react";

import type { Breakpoint } from "@mui/material/styles";
import type { ReactNode } from "react";

import { useBreakPoint } from "@/hooks/useBreakPoint";

export interface CookieAlertContentProps {
  breakpoints: Breakpoint[];
  action: ReactNode;
  message: ReactNode;
}

/**
 * Cookie Alert Content
 */
export const CookieAlertContent = forwardRef<
  HTMLDivElement,
  CookieAlertContentProps
>(({ breakpoints, action, message }, ref) => {
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
        "& .MuiSnackbarContent-action": {
          padding: 0,
        },
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
});

CookieAlertContent.displayName = "CookieAlertContent";
