import { styled } from "@mui/material/styles";

import { CONSOLE_FONT_FAMILY } from "./constants";

export const InlineCode = styled("span")(({ theme }) => ({
  display: "inline-block",
  fontFamily: CONSOLE_FONT_FAMILY,
  paddingLeft: theme.spacing(0.5),
  paddingRight: theme.spacing(0.5),
  backgroundColor: theme.vars.palette.divider,
  borderRadius: theme.shape.borderRadius,
}));
