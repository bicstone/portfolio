import styled from "@emotion/styled";

export const Video = styled("video")(({ theme }) => ({
  position: "relative",
  display: "block",
  width: "100%",
  maxWidth: 600,
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: theme.spacing(2),
  border: `1px solid ${theme.vars.palette.divider}`,
  padding: theme.spacing(1),
}));
