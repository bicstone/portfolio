import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/ConnpassLogo.svg";

export const ConnpassLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
