import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/GitHubLogo.svg";
import whiteLogo from "@/content/logos/GitHubWhiteLogo.svg";

export const GitHubLogo = styled(LogoBase)(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    backgroundImage: `url(${whiteLogo})`,
  },
}));
