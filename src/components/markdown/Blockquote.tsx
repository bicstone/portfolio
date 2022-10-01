import styled from "@emotion/styled";

export const Blockquote = styled("blockquote")(({ theme }) => ({
  margin: theme.spacing(2),
  padding: theme.spacing(0, 1),
  borderLeft: `${theme.vars.palette.divider} solid ${theme.spacing(0.5)}`,
}));
