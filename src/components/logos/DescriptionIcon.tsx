import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/DescriptionIcon.svg";
import whiteLogo from "@/content/logos/DescriptionWhiteIcon.svg";

export const DescriptionIcon = styled(LogoBase)(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  [theme.getColorSchemeSelector("dark")]: {
    backgroundImage: `url(${whiteLogo})`,
  },
}));
