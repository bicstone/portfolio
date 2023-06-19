import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/GitHubIcon.svg";
import whiteIcon from "@/content/icons/GitHubWhiteIcon.svg";

export const GitHubIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
