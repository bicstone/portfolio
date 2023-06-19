import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/DescriptionIcon.svg";
import whiteIcon from "@/content/icons/DescriptionWhiteIcon.svg";

export const BlogIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
