import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/FindyLogo.svg";

export const FindyLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
