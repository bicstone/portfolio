import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/RissIcon.png";

export const RissIcon = styled(LogoBase)(({ theme }) => ({
  content: `url(${logo})`,
  width: theme.spacing(12),
  height: theme.spacing(12),
}));
