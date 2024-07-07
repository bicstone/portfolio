import { Button } from "@mui/material";
import { bicstone, type LinkKeys } from "bicstone";
import { useState } from "react";

import { BioHelloCard } from "./BioHelloCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { BlueskyIcon } from "@/components/icons/BlueskyIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { FindyIcon } from "@/components/icons/FindyIcon";
import { ForkwellIcon } from "@/components/icons/ForkwellIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LaprasIcon } from "@/components/icons/LaprasIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MisskeyIcon } from "@/components/icons/MisskeyIcon";
import { MstdnIcon } from "@/components/icons/MstdnIcon";
import { NoteIcon } from "@/components/icons/NoteIcon";
import { NpmIcon } from "@/components/icons/NpmIcon";
import { QiitaIcon } from "@/components/icons/QiitaIcon";
import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import { WantedlyIcon } from "@/components/icons/WantedlyIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YoutrustIcon } from "@/components/icons/YoutrustIcon";
import { ZennIcon } from "@/components/icons/ZennIcon";

export const BioCardList = (): JSX.Element => {
  const [expend, setExpend] = useState(false);
  const handleExpendButtonClick = (): void => {
    setExpend(true);
  };

  const linkKeys = [
    "x",
    "npm",
    "facebook",
    "linkedin",
    "youtrust",
    "github",
    "zenn",
    "note",
  ] as const satisfies LinkKeys[];

  const moreLinkKeys = [
    "qiita",
    "speakerdeck",
    "findy",
    "forkwell",
    "lapras",
    "wantedly",
    "bluesky",
    "misskey",
    "mstdn",
    "threads",
  ] as const satisfies LinkKeys[];

  const avatarMap = {
    bluesky: <BlueskyIcon aria-hidden="true" />,
    facebook: <FacebookIcon aria-hidden="true" />,
    findy: <FindyIcon aria-hidden="true" />,
    forkwell: <ForkwellIcon aria-hidden="true" />,
    github: <GitHubIcon aria-hidden="true" />,
    lapras: <LaprasIcon aria-hidden="true" />,
    linkedin: <LinkedInIcon aria-hidden="true" />,
    misskey: <MisskeyIcon aria-hidden="true" />,
    mstdn: <MstdnIcon aria-hidden="true" />,
    note: <NoteIcon aria-hidden="true" />,
    npm: <NpmIcon area-hidden="true" />,
    qiita: <QiitaIcon aria-hidden="true" />,
    speakerdeck: <SpeakerDeckIcon aria-hidden="true" />,
    threads: <ThreadsIcon aria-hidden="true" />,
    wantedly: <WantedlyIcon aria-hidden="true" />,
    x: <XIcon aria-hidden="true" />,
    youtrust: <YoutrustIcon aria-hidden="true" />,
    zenn: <ZennIcon aria-hidden="true" />,
  } as const satisfies Record<
    (typeof linkKeys)[number] | (typeof moreLinkKeys)[number],
    JSX.Element
  >;

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
      <BioHelloCard variant="elevation" css={{ gridColumn: "1 / -1" }} />
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
      <div
        css={(theme) => ({
          display: "grid",
          gap: theme.spacing(3),
          gridColumn: "1 / -1",
          gridTemplateColumns: "repeat(4, 1fr)",
          maxHeight: expend ? "none" : theme.spacing(10),
          overflow: "hidden",
          paddingBottom: theme.spacing(10),
          position: "relative",
          width: "100%",
          [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "repeat(3, 1fr)",
          },
          [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
          },
        })}
      >
        {moreLinkKeys.map((linkKey) => {
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
        {!expend && (
          <div
            css={(theme) => ({
              alignItems: "end",
              background:
                "linear-gradient(0, #fff, #fff 20%, hsla(0, 0%, 100%, 0));",
              bottom: 0,
              display: "flex",
              height: theme.spacing(10),
              justifyContent: "center",
              left: 0,
              position: "absolute",
              width: "100%",
            })}
          >
            <Button variant="outlined" onClick={handleExpendButtonClick}>
              もっと見る
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
