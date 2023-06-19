import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/LaprasLogo.svg";

export const LaprasLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
