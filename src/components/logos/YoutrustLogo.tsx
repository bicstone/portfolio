import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/YoutrustLogo.svg";

export const YoutrustLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
