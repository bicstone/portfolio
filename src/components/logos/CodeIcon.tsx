import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/CodeIcon.svg";
import whiteLogo from "@/content/logos/CodeWhiteIcon.svg";

export const CodeIcon = styled(LogoBase)(({ theme }) => ({
  content: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteLogo})`,
  },
}));
