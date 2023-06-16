import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { BackToTop } from "./BackToTop";

/**
 * Footer Layout
 */
export const Footer = (): JSX.Element => {
  const nowDate = new Date();
  return (
    <footer
      css={(theme) => ({
        alignItems: "center",
        borderTop: `1px solid ${theme.vars.palette.divider}`,
        display: "flex",
        flexDirection: "column",
        marginBottom: `env(safe-area-inset-bottom, 0px)`,
        marginTop: "auto",
        padding: theme.spacing(3),
      })}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        paragraph
        css={(theme) => ({ display: "inline-flex", gap: theme.spacing(1) })}
      >
        <Link component={RouterLink} color="inherit" to="/">
          ホーム
        </Link>
        <Link component={RouterLink} color="inherit" to="/me">
          プロフィール
        </Link>
        <Link component={RouterLink} color="inherit" to="/privacy">
          プライバシーポリシー
        </Link>
      </Typography>
      <Typography
        variant="caption"
        color="textSecondary"
        align="center"
        component="p"
      >
        {`© ${nowDate.getFullYear()} Oishi Takanori / Made with Gatsby.js`}
      </Typography>
      <BackToTop />
    </footer>
  );
};

export default Footer;
