import styled from "@emotion/styled";

export const Image = styled("img")(({ theme }) => ({
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.vars.palette.divider}`,
}));
