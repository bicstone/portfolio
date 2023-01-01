import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import type { ReactNode } from "react";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

const ShareButton = (props: {
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

export const ShareButtons = (props: {
  title: string;
  url: string;
}): JSX.Element => {
  const encodedTitle = encodeURIComponent(props.title);
  const encodeUri = encodeURIComponent(props.url);

  const twitterRelated = SITE_METADATA.twitter.replace("@", "");
  const twitterHref = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodeUri}&related=${twitterRelated}`;

  const faceBookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeUri}&t=${encodedTitle}`;

  const hatenaEncodeUri = props.url.replace("https://", "");
  const hatenaBookmarkHref = `https://b.hatena.ne.jp/entry/${hatenaEncodeUri}`;

  const linkedinHref = `https://www.linkedin.com/shareArticle?url=${encodeUri}`;

  const lineHref = `https://timeline.line.me/social-plugin/share?url=${encodeUri}`;

  const pocketHref = `https://getpocket.com/edit?url=${encodeUri}`;

  return (
    <Grid container spacing={2} paddingX={2}>
      <ShareButton
        href={twitterHref}
        title={TRANSLATION.share.twitter.title}
        color="#1aa1f2"
      >
        {TRANSLATION.share.twitter.name}
      </ShareButton>
      <ShareButton
        href={faceBookHref}
        title={TRANSLATION.share.facebook.title}
        color="#3b5897"
      >
        {TRANSLATION.share.facebook.name}
      </ShareButton>
      <ShareButton
        href={hatenaBookmarkHref}
        title={TRANSLATION.share.hatenaBookmark.title}
        color="#2e6dbe"
      >
        {TRANSLATION.share.hatenaBookmark.name}
      </ShareButton>
      <ShareButton
        href={linkedinHref}
        title={TRANSLATION.share.linkedin.title}
        color="#0077b5"
      >
        {TRANSLATION.share.linkedin.name}
      </ShareButton>
      <ShareButton
        href={lineHref}
        title={TRANSLATION.share.line.title}
        color="#00c400"
      >
        {TRANSLATION.share.line.name}
      </ShareButton>
      <ShareButton
        href={pocketHref}
        title={TRANSLATION.share.pocket.title}
        color="#f03f56"
      >
        {TRANSLATION.share.pocket.name}
      </ShareButton>
    </Grid>
  );
};
