import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/CorpIcon.svg";
import whiteIcon from "@/content/icons/CorpWhiteIcon.svg";

export const CorpIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
