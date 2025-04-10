import { Button } from "@mui/material";
import { bicstone, type LinkKeys } from "bicstone";
import { useState } from "react";

import { BioHelloCard } from "./BioHelloCard";
import { BioSocialLinkCard } from "./BioSocialLinkCard";

import { BlueskyIcon } from "@/components/icons/BlueskyIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { Mixi2Icon } from "@/components/icons/Mixi2Icon";
import { NoteIcon } from "@/components/icons/NoteIcon";
import { NpmIcon } from "@/components/icons/NpmIcon";
import { QiitaIcon } from "@/components/icons/QiitaIcon";
import { SpeakerDeckIcon } from "@/components/icons/SpeakerDeckIcon";
import { ThreadsIcon } from "@/components/icons/ThreadsIcon";
import { WantedlyIcon } from "@/components/icons/WantedlyIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YoutrustIcon } from "@/components/icons/YoutrustIcon";
import { ZennIcon } from "@/components/icons/ZennIcon";

export const BioCardList = (): React.JSX.Element => {
  const [expend, setExpend] = useState(false);
  const handleExpendButtonClick = (): void => {
    setExpend(true);
  };

  const linkKeys = [
    "x",
    "instagram",
    "facebook",
    "linkedin",
    "mixi2",
    "youtrust",
    "zenn",
    "speakerdeck",
    "note",
    "qiita",
    "github",
    "npm",
    "bluesky",
    "threads",
    "wantedly",
  ] as const satisfies LinkKeys[];

  const avatarMap = {
    bluesky: <BlueskyIcon aria-hidden="true" />,
    facebook: <FacebookIcon aria-hidden="true" />,
    github: <GitHubIcon aria-hidden="true" />,
    instagram: <InstagramIcon aria-hidden="true" />,
    linkedin: <LinkedInIcon aria-hidden="true" />,
    mixi2: <Mixi2Icon aria-hidden="true" />,
    note: <NoteIcon aria-hidden="true" />,
    npm: <NpmIcon area-hidden="true" />,
    qiita: <QiitaIcon aria-hidden="true" />,
    speakerdeck: <SpeakerDeckIcon aria-hidden="true" />,
    threads: <ThreadsIcon aria-hidden="true" />,
    wantedly: <WantedlyIcon aria-hidden="true" />,
    x: <XIcon aria-hidden="true" />,
    youtrust: <YoutrustIcon aria-hidden="true" />,
    zenn: <ZennIcon aria-hidden="true" />,
  } as const satisfies Record<(typeof linkKeys)[number], React.JSX.Element>;

  return (
    <div
      css={(theme) => ({
        display: "grid",
        gap: theme.spacing(3),
        gridTemplateColumns: "repeat(5, 1fr)",
        maxHeight: expend ? "none" : theme.spacing(76),
        overflow: "hidden",
        paddingBottom: theme.spacing(10),
        position: "relative",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          gridTemplateColumns: "repeat(3, 1fr)",
          maxHeight: expend ? "none" : theme.spacing(106),
        },
        // HACK: ブレークポイントの定義
        "@media (max-width: 500.95px) {": {
          maxHeight: expend ? "none" : theme.spacing(94),
        },
        // HACK: ブレークポイントの定義
        "@media (max-width: 550.95px) {": {
          maxHeight: expend ? "none" : theme.spacing(91),
        },
        // HACK: ブレークポイントの定義
        "@media (max-width: 400.95px) {": {
          maxHeight: expend ? "none" : theme.spacing(82),
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
      {!expend && (
        <div
          css={(theme) => ({
            alignItems: "end",
            background:
              "linear-gradient(0, #fff, #fff 20%, hsla(0, 0%, 100%, 0));",
            bottom: 0,
            display: "flex",
            height: theme.spacing(11),
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
  );
};
