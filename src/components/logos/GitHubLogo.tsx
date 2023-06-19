import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/GitHubLogo.svg";
import whiteLogo from "@/content/logos/GitHubWhiteLogo.svg";

export const GitHubLogo = styled(LogoBase)(({ theme }) => ({
  content: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteLogo})`,
  },
}));
