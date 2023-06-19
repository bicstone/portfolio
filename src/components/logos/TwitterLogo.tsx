import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/TwitterLogo.svg";

export const TwitterLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
