import { styled } from "@mui/material/styles";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/CsmIcon.png";

export const CsmIcon = styled(LogoBase)(({ theme }) => ({
  backgroundImage: `url(${logo})`,
  width: theme.spacing(12),
  height: theme.spacing(12),
}));
