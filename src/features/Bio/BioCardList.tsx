import { bicstone } from "bicstone";

import { BioCsmCard } from "./BioCsmCard";
import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioRissCard } from "./BioRissCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { AlternateEmailIcon } from "@/components/icons/AlternateEmailIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { FindyIcon } from "@/components/icons/FindyIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LaprasIcon } from "@/components/icons/LaprasIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { XIcon } from "@/components/icons/XIcon";
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
        avatar={<FacebookIcon aria-hidden="true" />}
        title={bicstone.links.facebook.siteName}
        subTitle={`@${bicstone.links.facebook.screenName}`}
        actionTitle={`${bicstone.links.facebook.siteName}を見る`}
        url={bicstone.links.facebook.url}
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<XIcon aria-hidden="true" />}
        title="X"
        subTitle="@bicstone_me"
        actionTitle="フォロー"
        url="https://x.com/bicstone_me"
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
        subTitle="@bicstone.me"
        actionTitle="フォロー"
        url="https://bsky.app/profile/bicstone.me"
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
        avatar={<FindyIcon aria-hidden="true" />}
        title="Findy"
        subTitle="AKvsozgldUI4i"
        actionTitle="スキル偏差値を見る"
        url="https://findy-code.io/share_profiles/AKvsozgldUI4i"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<LaprasIcon aria-hidden="true" />}
        title="Lapras"
        subTitle="@bicstone"
        actionTitle="LAPRAS SCOREを見る"
        url="https://lapras.com/public/bicstone"
        variant="elevation"
      />
    </div>
  );
};
