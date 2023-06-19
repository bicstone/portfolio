import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/BicstoneLogo.svg";

export const BicstoneLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
