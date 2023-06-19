import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/AutoAwesomeIcon.svg";
import whiteLogo from "@/content/logos/AutoAwesomeWhiteIcon.svg";

export const AutoAwesomeIcon = styled(LogoBase)(({ theme }) => ({
  content: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteLogo})`,
  },
}));
