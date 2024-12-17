import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/Mixi2Icon.svg";

export const Mixi2Icon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
}));
