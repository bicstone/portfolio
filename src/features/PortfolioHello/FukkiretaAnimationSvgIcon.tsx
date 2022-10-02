import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const FukkiretaAnimationSvgIcon = styled("img")<{
  activeAnimation: boolean;
}>(({ activeAnimation }) => ({
  cursor: "pointer",
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
