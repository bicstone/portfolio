import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/SpeakerDeckLogo.png";

export const SpeakerDeckLogo = styled(LogoBase)({
  backgroundImage: `url(${logo})`,
});
