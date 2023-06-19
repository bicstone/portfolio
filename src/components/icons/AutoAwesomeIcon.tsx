import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/AutoAwesomeIcon.svg";
import whiteIcon from "@/content/icons/AutoAwesomeWhiteIcon.svg";

export const AutoAwesomeIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
