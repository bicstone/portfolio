import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/RissIcon.png";

export const RissIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  width: theme.spacing(12),
  height: theme.spacing(12),
}));
