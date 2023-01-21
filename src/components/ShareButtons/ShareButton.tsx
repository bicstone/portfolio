import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import type { ReactNode } from "react";

export const ShareButton = (props: {
  href: string;
  title: string;
  color: string;
  children: ReactNode;
}): JSX.Element => {
  const { href, title, color, children } = props;

  return (
    <Grid item xs={6} sm={4} md={2}>
      <Button
        variant="outlined"
        color="inherit"
        href={href}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={title}
        title={title}
        size="large"
        css={(theme) => ({
          color,
          borderRadius: theme.spacing(1),
          width: "100%",
        })}
      >
        {children}
      </Button>
    </Grid>
  );
};
