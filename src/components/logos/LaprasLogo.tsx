import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/LaprasLogo.svg";

export const LaprasLogo = styled(LogoBase)({
  content: `url(${logo})`,
});
