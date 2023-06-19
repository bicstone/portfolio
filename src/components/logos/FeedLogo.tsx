import styled from "@emotion/styled";

import { LogoBase } from "./LogoBase";

import logo from "@/content/logos/FeedLogo.svg";

export const FeedLogo = styled(LogoBase)({
  content: `url(${logo})`,
});
