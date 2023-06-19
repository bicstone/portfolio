import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/ZennLogo.svg";

export const ZennLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
