import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { BackToTop } from "./BackToTop";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import happyBusy from "@/layouts/banners/happy-busy.png";

/**
 * Footer Layout
 */
export const Footer = (): React.JSX.Element => {
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
        <Link component={RouterLink} color="inherit" to="/outputs">
          アウトプット
        </Link>
        <Link
          color="inherit"
          href={SITE_METADATA.profileLink}
          rel="external noopener follow me"
          target="_blank"
          title="外部リンクのため、別ウインドウで開きます"
        >
          プロフィール
        </Link>
        <Link
          color="inherit"
          href="https://bicstone.notion.site/106009431fdc809c87c3f4fee24b7dfe"
          rel="external noopener follow me"
          target="_blank"
          title="外部リンクのため、別ウインドウで開きます"
        >
          プライバシーポリシー
        </Link>
      </Typography>
      <a
        href="https://sites.google.com/view/happy-busy/"
        rel="external noopener noreferrer"
        target="_blank"
        title="外部リンクのため、別ウインドウで開きます"
      >
        <img
          alt="時間のないサイト運営者リング"
          src={happyBusy}
          width={200}
          height={40}
          decoding="async"
          loading="lazy"
        />
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
