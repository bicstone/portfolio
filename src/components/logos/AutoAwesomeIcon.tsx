import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/AutoAwesomeIcon.svg";
import whiteLogo from "@/content/logos/AutoAwesomeWhiteIcon.svg";

export const AutoAwesomeIcon = styled(LogoBase)(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    backgroundImage: `url(${whiteLogo})`,
  },
}));
