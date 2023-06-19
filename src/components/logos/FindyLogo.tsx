import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/FindyLogo.svg";

export const FindyLogo = styled(LogoBase)({
  content: `url(${logo})`,
});
