import { bicstone, type LinkKeys } from "bicstone";

import { BioHelloCard } from "./BioHelloCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { AlternateEmailIcon } from "@/components/icons/AlternateEmailIcon";
import { BlueskyIcon } from "@/components/icons/BlueskyIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { NoteIcon } from "@/components/icons/NoteIcon";
import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YoutrustIcon } from "@/components/icons/YoutrustIcon";
import { ZennIcon } from "@/components/icons/ZennIcon";

export const BioCardList = (): JSX.Element => {
  const linkKeys = [
    "x",
    "facebook",
    "linkedin",
    "bluesky",
    "threads",
    "youtrust",
    "zenn",
    "note",
    "speakerdeck",
    "github",
  ] as const satisfies LinkKeys[];

  const avatarMap = {
    bluesky: <BlueskyIcon aria-hidden="true" />,
    facebook: <FacebookIcon aria-hidden="true" />,
    github: <GitHubIcon aria-hidden="true" />,
    linkedin: <LinkedInIcon aria-hidden="true" />,
    note: <NoteIcon aria-hidden="true" />,
    speakerdeck: <SpeakerDeckIcon aria-hidden="true" />,
    threads: <ThreadsIcon aria-hidden="true" />,
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
        [theme.breakpoints.down("sm")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      })}
    >
      <BioHelloCard
        variant="elevation"
        css={(theme) => ({
          gridColumn: "1 / 5",
          [theme.breakpoints.down("md")]: {
            gridColumn: "1 / 4",
          },
          [theme.breakpoints.down("sm")]: {
            gridColumn: "1 / 3",
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
