import { withPrefix } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

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
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
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
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
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
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
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
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
            loading="eager"
            decoding="async"
          />
        }
        title="GitHub"
        subTitle="@bicstone"
        actionTitle="Follow"
        url="https://github.com/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
            loading="eager"
            decoding="async"
          />
        }
        title="Zenn"
        subTitle="@bicstone"
        actionTitle="Follow"
        url="https://speakerdeck.com/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
            loading="eager"
            decoding="async"
          />
        }
        title="Speaker Deck"
        subTitle="@bicstone"
        actionTitle="Follow"
        url="https://speakerdeck.com/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
            loading="eager"
            decoding="async"
          />
        }
        title="Connpass"
        subTitle="@bicstone"
        actionTitle="Attend"
        url="https://connpass.com/user/bicstone"
      />
      <BioSocialLinkCard
        logo={
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
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
          <StaticImage
            width={40}
            height={40}
            src="./logos/speakerdeck.png"
            alt="Twitter"
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
