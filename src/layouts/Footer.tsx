import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { BackToTop } from "./BackToTop";

import { TRANSLATION } from "@/constants/TRANSLATION";

/**
 * Footer Layout
 */
export const Footer = (): JSX.Element => {
  const nowDate = new Date();
  return (
    <footer
      css={(theme) => ({
        marginTop: "auto",
        padding: theme.spacing(3),
        borderTop: `1px solid ${theme.vars.palette.divider}`,
        marginBottom: `env(safe-area-inset-bottom, 0px)`,
      })}
      role="contentinfo"
    >
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        paragraph
      >
        <Link component={RouterLink} color="inherit" to="/privacy">
          {TRANSLATION.privacy.title}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {`© ${nowDate.getFullYear()} ${TRANSLATION.footer.copyright}`}
      </Typography>
      <BackToTop />
    </footer>
  );
};
