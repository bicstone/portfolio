import Grid from "@mui/material/Grid";

import { ShareButton } from "./ShareButton";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

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
        color={TRANSLATION.share.twitter.color}
      >
        {TRANSLATION.share.twitter.name}
      </ShareButton>
      <ShareButton
        href={faceBookHref}
        title={TRANSLATION.share.facebook.title}
        color={TRANSLATION.share.facebook.color}
      >
        {TRANSLATION.share.facebook.name}
      </ShareButton>
      <ShareButton
        href={hatenaBookmarkHref}
        title={TRANSLATION.share.hatenaBookmark.title}
        color={TRANSLATION.share.hatenaBookmark.color}
      >
        {TRANSLATION.share.hatenaBookmark.name}
      </ShareButton>
      <ShareButton
        href={linkedinHref}
        title={TRANSLATION.share.linkedin.title}
        color={TRANSLATION.share.linkedin.color}
      >
        {TRANSLATION.share.linkedin.name}
      </ShareButton>
      <ShareButton
        href={lineHref}
        title={TRANSLATION.share.line.title}
        color={TRANSLATION.share.line.color}
      >
        {TRANSLATION.share.line.name}
      </ShareButton>
      <ShareButton
        href={pocketHref}
        title={TRANSLATION.share.pocket.title}
        color={TRANSLATION.share.pocket.color}
      >
        {TRANSLATION.share.pocket.name}
      </ShareButton>
    </Grid>
  );
};
