import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/VerifiedIcon.svg";
import whiteLogo from "@/content/logos/VerifiedWhiteIcon.svg";

export const VerifiedIcon = styled(LogoBase)(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    backgroundImage: `url(${whiteLogo})`,
  },
}));
