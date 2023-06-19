import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/PaycareerLogo.svg";

export const PaycareerLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
