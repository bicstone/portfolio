import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/TwitterLogo.svg";

export const TwitterLogo = styled(LogoBase)({
  content: `url(${logo})`,
});
