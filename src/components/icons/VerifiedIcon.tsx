import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/VerifiedIcon.svg";
import whiteIcon from "@/content/icons/VerifiedWhiteIcon.svg";

export const VerifiedIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
