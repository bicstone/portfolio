import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { BackToTop } from "./BackToTop";

import { ExternalLink } from "@/components/ExternalLink";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import happyBusy from "@/layouts/banners/happy-busy.png";

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
        gap: theme.spacing(2),
        marginBottom: `env(safe-area-inset-bottom, 0px)`,
        marginTop: "auto",
        padding: theme.spacing(3),
      })}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        css={(theme) => ({ display: "inline-flex", gap: theme.spacing(1) })}
      >
        <Link component={RouterLink} color="inherit" to="/">
          ホーム
        </Link>
        <Link
          color="inherit"
          href={SITE_METADATA.profileLink}
          rel="external noopener follow me"
          target="_blank"
        >
          <ExternalLink>プロフィール</ExternalLink>
        </Link>
        <Link component={RouterLink} color="inherit" to="/privacy">
          プライバシーポリシー
        </Link>
      </Typography>
      <a
        href="https://sites.google.com/view/happy-busy/"
        title="時間のないサイト運営者リング"
        rel="external noopener noreferrer"
        target="_blank"
      >
        <ExternalLink>
          <img
            alt="時間のないサイト運営者リング"
            src={happyBusy}
            width={200}
            height={40}
            decoding="async"
            loading="lazy"
          />
        </ExternalLink>
      </a>
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
