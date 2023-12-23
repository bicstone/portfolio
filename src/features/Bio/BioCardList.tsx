import { bicstone, type LinkKeys } from "bicstone";

import { BioHelloCard } from "./BioHelloCard";
import { BioIcon } from "./BioIconCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { AlternateEmailIcon } from "@/components/icons/AlternateEmailIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YoutrustIcon } from "@/components/icons/YoutrustIcon";
import { ZennIcon } from "@/components/icons/ZennIcon";

export const BioCardList = (): JSX.Element => {
  const linkKeys = [
    "x",
    "facebook",
    "linkedin",
    "bluesky",
    "youtrust",
    "github",
    "zenn",
    "speakerdeck",
  ] as const satisfies LinkKeys[];

  const avatarMap = {
    bluesky: <AlternateEmailIcon aria-hidden="true" />,
    facebook: <FacebookIcon aria-hidden="true" />,
    github: <GitHubIcon aria-hidden="true" />,
    linkedin: <LinkedInIcon aria-hidden="true" />,
    speakerdeck: <SpeakerDeckIcon aria-hidden="true" />,
    x: <XIcon aria-hidden="true" />,
    youtrust: <YoutrustIcon aria-hidden="true" />,
    zenn: <ZennIcon aria-hidden="true" />,
  } as const satisfies Record<(typeof linkKeys)[number], JSX.Element>;

  return (
    <div
      css={(theme) => ({
        display: "grid",
        gap: theme.spacing(3),
        gridTemplateColumns: "repeat(4, 1fr)",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "repeat(3, 1fr)",
        },
      })}
    >
      <BioIcon variant="elevation" />
      <BioHelloCard
        variant="elevation"
        css={(theme) => ({
          gridColumn: "2 / 4",
          [theme.breakpoints.down("md")]: {
            gridColumn: "2 / 3",
          },
        })}
      />
      {linkKeys.map((linkKey) => {
        const link = bicstone.links[linkKey];
        return (
          <BioSocialLinkCard
            key={link.siteName}
            avatar={avatarMap[linkKey]}
            title={link.siteName}
            subTitle={`@${link.screenName}`}
            actionTitle={link.siteName}
            url={link.url}
            variant="elevation"
          />
        );
      })}
    </div>
  );
};
