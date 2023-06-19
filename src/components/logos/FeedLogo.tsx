import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/FeedLogo.svg";

export const FeedLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
