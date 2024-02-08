import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/BlueskyIcon.svg";

export const BlueskyIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
}));
