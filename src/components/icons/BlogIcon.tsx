import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/BlogIcon.svg";
import whiteIcon from "@/content/icons/BlogWhiteIcon.svg";

export const BlogIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
