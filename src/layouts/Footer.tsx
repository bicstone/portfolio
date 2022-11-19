import { Typography, Link } from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";

import { BackToTop } from "./BackToTop";

/**
 * Footer Layout
 */
export const Footer = (): JSX.Element => {
  const { t } = useI18next();
  const nowDate = new Date();
  return (
    <footer
      css={(theme) => ({
        marginTop: "auto",
        padding: theme.spacing(3),
        borderTop: `1px solid ${theme.vars.palette.divider}`,
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
          {t("privacy.title")}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {t("footer.copyright", { year: nowDate.getFullYear() })}
      </Typography>
      <BackToTop />
    </footer>
  );
};
