import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import visuallyHidden from "@mui/utils/visuallyHidden";
import { type MouseEventHandler, useState } from "react";

import { BicstoneIcon } from "@/components/icons/BicstoneIcon";
import { TRANSLATION } from "@/constants/TRANSLATION";
const FukkiretaAnimationImg = styled(BicstoneIcon)<{
  activeAnimation: boolean;
}>(({ activeAnimation }) => ({ theme }) => ({
  cursor: "pointer",
  margin: theme.spacing(0, 2),
  width: theme.spacing(12),
  height: theme.spacing(12),

  ...(activeAnimation && {
    transformOrigin: "center bottom",
    animationName: keyframes`
        0%, 100% { transform: rotate(10deg) }
        50% { transform: rotate(-10deg) }
      `,
    animationDuration: "1s",
    animationDelay: "-0.25s",
    animationTimingFunction: "cubic-bezier(0.4, 0.0, 0.7, 1.0)",
    animationIterationCount: "infinite",
  }),
}));

const StyledCardActionArea = styled(CardActionArea)({
  display: "flex",
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
}) as typeof CardActionArea;

export const BioIcon = (props: CardProps): JSX.Element => {
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);

  const alt = activeAnimation
    ? TRANSLATION.hello.icon.fukkireta
    : TRANSLATION.hello.icon.normal;

  const onClick: MouseEventHandler<HTMLButtonElement> = () => {
    setActiveAnimation(!activeAnimation);
  };

  return (
    <Card {...props} title={alt} component="article">
      <StyledCardActionArea onClick={onClick}>
        <FukkiretaAnimationImg
          activeAnimation={activeAnimation}
          aria-hidden="true"
        />
        <span css={{ ...visuallyHidden }}>{alt}</span>
      </StyledCardActionArea>
    </Card>
  );
};
