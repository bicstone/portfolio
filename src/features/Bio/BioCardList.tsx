import { withPrefix } from "gatsby";

import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import connpassLogo from "@/components/logos/connpass.svg";
import feedLogo from "@/components/logos/feed.svg";
import githubLogo from "@/components/logos/github.svg";
import linkdinLogo from "@/components/logos/linkdin.png";
import paycareerLogo from "@/components/logos/paycareer.svg";
import speakerdeckLogo from "@/components/logos/speakerdeck.png";
import twitterLogo from "@/components/logos/twitter.svg";
import youtrustLogo from "@/components/logos/youtrust.svg";
import zennLogo from "@/components/logos/zenn.svg";

export const BioCardList = (): JSX.Element => {
  return (
    <div
      css={(theme) => ({
        display: "grid",
        gap: theme.spacing(2),
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      })}
    >
      <BioIcon />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={twitterLogo}
            alt="Twitter"
            loading="eager"
            decoding="async"
          />
        }
        title="Twitter"
        subTitle="@bicstone_me"
        actionTitle="Follow"
        url="https://twitter.com/bicstone_me"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={youtrustLogo}
            alt="YOUTRUST"
            loading="eager"
            decoding="async"
          />
        }
        title="YOUTRUST"
        subTitle="@bicstone"
        actionTitle="つながる"
        url="https://youtrust.jp/users/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={linkdinLogo}
            alt="YOUTRUST"
            loading="eager"
            decoding="async"
          />
        }
        title="LinkedIn"
        subTitle="@bicstone"
        actionTitle="Connect"
        url="https://www.linkedin.com/in/bicstone"
      />
      <BioHelloCard
        css={(theme) => ({
          gridColumn: "1 / 3",
          [theme.breakpoints.down("sm")]: {
            gridColumn: "1 / 3",
          },
        })}
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={githubLogo}
            alt="GitHub"
            loading="eager"
            decoding="async"
          />
        }
        title="GitHub"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://github.com/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={zennLogo}
            alt="Zenn"
            loading="eager"
            decoding="async"
          />
        }
        title="Zenn"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://zenn.dev/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={speakerdeckLogo}
            alt="Speaker Deck"
            loading="eager"
            decoding="async"
          />
        }
        title="Speaker Deck"
        subTitle="@bicstone"
        actionTitle="フォロー"
        url="https://speakerdeck.com/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={connpassLogo}
            alt="Connpass"
            loading="eager"
            decoding="async"
          />
        }
        title="Connpass"
        subTitle="@bicstone"
        actionTitle="交流する"
        url="https://connpass.com/user/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={paycareerLogo}
            alt="PayCareer"
            loading="eager"
            decoding="async"
          />
        }
        title="PayCareer"
        subTitle="2022249011"
        actionTitle="面接する"
        url="https://pay-career.com/spot_request/2022249011"
      />
      <BioSocialLinkCard
        logo={
          <img
            width={32}
            src={feedLogo}
            alt="PayCareer"
            loading="eager"
            decoding="async"
          />
        }
        title="RSS"
        subTitle="rss.xml"
        actionTitle="購読する"
        url={withPrefix("/rss.xml")}
      />
    </div>
  );
};
