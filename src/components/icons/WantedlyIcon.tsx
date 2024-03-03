import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/WantedlyDarkIcon.svg";
import whiteIcon from "@/content/icons/WantedlyLightIcon.svg";

export const WantedlyIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${whiteIcon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${icon})`,
  },
}));
