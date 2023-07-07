import { withPrefix } from "gatsby";

import { BioCsmCard } from "./BioCsmCard";
import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioRissCard } from "./BioRissCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { AlternateEmailIcon } from "@/components/icons/AlternateEmailIcon";
import { ConnpassIcon } from "@/components/icons/ConnpassIcon";
import { FeedIcon } from "@/components/icons/FeedIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { PaycareerIcon } from "@/components/icons/PaycareerIcon";
import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { YoutrustIcon } from "@/components/icons/YoutrustIcon";
import { ZennIcon } from "@/components/icons/ZennIcon";

export const BioCardList = (): JSX.Element => {
  return (
    <div
      css={(theme) => ({
        display: "grid",
        gap: theme.spacing(3),
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          gap: theme.spacing(5),
          gridTemplateColumns: "repeat(2, 1fr)",
        },
        [theme.breakpoints.down("sm")]: {
          gap: theme.spacing(3),
        },
      })}
    >
      <BioIcon variant="elevation" />
      <BioSocialLinkCard
        avatar={<TwitterIcon aria-hidden="true" />}
        title="Twitter"
        subTitle="@bicstone_me"
        actionTitle="フォロー"
        url="https://twitter.com/bicstone_me"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<YoutrustIcon aria-hidden="true" />}
        title="YOUTRUST"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://youtrust.jp/users/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<LinkedInIcon aria-hidden="true" />}
        title="LinkedIn"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://www.linkedin.com/in/bicstone"
        variant="elevation"
      />
      <BioHelloCard variant="elevation" css={{ gridColumn: "1 / 3" }} />
      <BioSocialLinkCard
        avatar={<AlternateEmailIcon aria-hidden="true" />}
        title="Bluesky"
        subTitle="@bicstone.bsky.social"
        actionTitle="フォロー"
        url="https://bsky.app/profile/bicstone.bsky.social"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<ThreadsIcon aria-hidden="true" />}
        title="Threads"
        subTitle="@bicstone_me"
        actionTitle="フォロー"
        url="https://www.threads.net/@bicstone_me"
        variant="elevation"
      />
      <BioRissCard variant="elevation" />
      <BioCsmCard variant="elevation" />
      <BioSocialLinkCard
        avatar={<GitHubIcon aria-hidden="true" />}
        title="GitHub"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://github.com/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<ZennIcon aria-hidden="true" />}
        title="Zenn"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://zenn.dev/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<SpeakerDeckIcon aria-hidden="true" />}
        title="Speaker Deck"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://speakerdeck.com/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<ConnpassIcon aria-hidden="true" />}
        title="Connpass"
        subTitle="@bicstone"
        actionTitle="交流する"
        url="https://connpass.com/user/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<PaycareerIcon aria-hidden="true" />}
        title="PayCareer"
        subTitle="2022249011"
        actionTitle="面接する"
        url="https://pay-career.com/spot_request/2022249011"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<FeedIcon aria-hidden="true" />}
        title="RSS"
        subTitle="rss.xml"
        actionTitle="購読する"
        url={withPrefix("/rss.xml")}
        variant="elevation"
      />
    </div>
  );
};
