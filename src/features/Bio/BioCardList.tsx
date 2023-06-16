import { withPrefix } from "gatsby";

import { BioFindyScoreCard } from "./BioFindyScoreCard";
import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioLaprasScoreCard } from "./BioLaprasScoreCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { ConnpassLogo } from "@/components/logos/ConnpassLogo";
import { FeedLogo } from "@/components/logos/FeedLogo";
import { GitHubLogo } from "@/components/logos/GitHubLogo";
import { LinkedInLogo } from "@/components/logos/LinkedInLogo";
import { PaycareerLogo } from "@/components/logos/PaycareerLogo";
import { SpeakerDeckLogo } from "@/components/logos/SpeakerDeckLogo";
import { TwitterLogo } from "@/components/logos/TwitterLogo";
import { YoutrustLogo } from "@/components/logos/YoutrustLogo";
import { ZennLogo } from "@/components/logos/ZennLogo";

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
      <BioIcon />
      <BioSocialLinkCard
        avatar={<TwitterLogo aria-hidden="true" />}
        title="Twitter"
        subTitle="@bicstone_me"
        actionTitle="フォロー"
        url="https://twitter.com/bicstone_me"
      />
      <BioSocialLinkCard
        avatar={<YoutrustLogo aria-hidden="true" />}
        title="YOUTRUST"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://youtrust.jp/users/bicstone"
      />
      <BioSocialLinkCard
        avatar={<LinkedInLogo aria-hidden="true" />}
        title="LinkedIn"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://www.linkedin.com/in/bicstone"
      />
      <BioHelloCard css={{ gridColumn: "1 / 3" }} />
      <BioSocialLinkCard
        avatar={<GitHubLogo aria-hidden="true" />}
        title="GitHub"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://github.com/bicstone"
      />
      <BioSocialLinkCard
        avatar={<ZennLogo aria-hidden="true" />}
        title="Zenn"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://zenn.dev/bicstone"
      />
      <BioSocialLinkCard
        avatar={<SpeakerDeckLogo aria-hidden="true" />}
        title="Speaker Deck"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://speakerdeck.com/bicstone"
      />
      <BioSocialLinkCard
        avatar={<ConnpassLogo aria-hidden="true" />}
        title="Connpass"
        subTitle="@bicstone"
        actionTitle="交流する"
        url="https://connpass.com/user/bicstone"
      />
      <BioSocialLinkCard
        avatar={<PaycareerLogo aria-hidden="true" />}
        title="PayCareer"
        subTitle="2022249011"
        actionTitle="面接する"
        url="https://pay-career.com/spot_request/2022249011"
      />
      <BioSocialLinkCard
        avatar={<FeedLogo aria-hidden="true" />}
        title="RSS"
        subTitle="rss.xml"
        actionTitle="購読する"
        url={withPrefix("/rss.xml")}
      />
      <BioFindyScoreCard css={{ gridColumn: "1 / 3" }} />
      <BioLaprasScoreCard
        css={(theme) => ({
          gridColumn: "3 / 5",
          [theme.breakpoints.down("md")]: {
            gridColumn: "1 / 3",
          },
        })}
      />
    </div>
  );
};
