import Box from "@mui/material/Box";
import { withPrefix } from "gatsby";

import { BioCsmCard } from "./BioCsmCard";
import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioRissCard } from "./BioRissCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { ConnpassLogo } from "@/components/logos/ConnpassLogo";
import { FeedLogo } from "@/components/logos/FeedLogo";
import { FindyLogo } from "@/components/logos/FindyLogo";
import { GitHubLogo } from "@/components/logos/GitHubLogo";
import { LaprasLogo } from "@/components/logos/LaprasLogo";
import { LinkedInLogo } from "@/components/logos/LinkedInLogo";
import { PaycareerLogo } from "@/components/logos/PaycareerLogo";
import { SpeakerDeckLogo } from "@/components/logos/SpeakerDeckLogo";
import { TwitterLogo } from "@/components/logos/TwitterLogo";
import { YoutrustLogo } from "@/components/logos/YoutrustLogo";
import { ZennLogo } from "@/components/logos/ZennLogo";

export const BioCardList = (): JSX.Element => {
  return (
    <Box
      sx={(theme) => ({
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
        avatar={<TwitterLogo aria-hidden="true" />}
        title="Twitter"
        subTitle="@bicstone_me"
        actionTitle="フォロー"
        url="https://twitter.com/bicstone_me"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<YoutrustLogo aria-hidden="true" />}
        title="YOUTRUST"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://youtrust.jp/users/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<LinkedInLogo aria-hidden="true" />}
        title="LinkedIn"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://www.linkedin.com/in/bicstone"
        variant="elevation"
      />
      <BioHelloCard variant="elevation" sx={{ gridColumn: "1 / 3" }} />
      <BioRissCard variant="elevation" />
      <BioCsmCard variant="elevation" />
      <BioSocialLinkCard
        avatar={<GitHubLogo aria-hidden="true" />}
        title="GitHub"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://github.com/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<ZennLogo aria-hidden="true" />}
        title="Zenn"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://zenn.dev/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<SpeakerDeckLogo aria-hidden="true" />}
        title="Speaker Deck"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://speakerdeck.com/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<ConnpassLogo aria-hidden="true" />}
        title="Connpass"
        subTitle="@bicstone"
        actionTitle="交流する"
        url="https://connpass.com/user/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<FindyLogo aria-hidden="true" />}
        title="Findy"
        subTitle="AKvsozgldUI4i"
        actionTitle="スキル偏差値を見る"
        url="https://findy-code.io/share_profiles/AKvsozgldUI4i"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<LaprasLogo aria-hidden="true" />}
        title="Lapras"
        subTitle="@bicstone"
        actionTitle="LAPRAS SCOREを見る"
        url="https://lapras.com/public/bicstone"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<PaycareerLogo aria-hidden="true" />}
        title="PayCareer"
        subTitle="2022249011"
        actionTitle="面接する"
        url="https://pay-career.com/spot_request/2022249011"
        variant="elevation"
      />
      <BioSocialLinkCard
        avatar={<FeedLogo aria-hidden="true" />}
        title="RSS"
        subTitle="rss.xml"
        actionTitle="購読する"
        url={withPrefix("/rss.xml")}
        variant="elevation"
      />
    </Box>
  );
};
