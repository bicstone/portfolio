import Card from "@mui/material/Card";
import { useState } from "react";

import { FukkiretaAnimationSvgIcon } from "./FukkiretaAnimationSvgIcon";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const BentoIcon = (): JSX.Element => {
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);

  return (
    <Card>
      <FukkiretaAnimationSvgIcon
        activeAnimation={activeAnimation}
        width={100}
        height={100}
        src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
        loading="eager"
        decoding="async"
        alt={
          activeAnimation
            ? TRANSLATION.hello.icon.fukkireta
            : TRANSLATION.hello.icon.normal
        }
        onClick={() => {
          setActiveAnimation(!activeAnimation);
        }}
        css={(theme) => ({
          margin: theme.spacing(0, 2),
        })}
      />
    </Card>
  );
};
