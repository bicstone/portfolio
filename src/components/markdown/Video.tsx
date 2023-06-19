import { styled } from "@mui/material/styles";

export const Video = styled("video")(({ theme }) => ({
  width: `calc(100% - ${theme.spacing(4)})`,
  margin: theme.spacing(2),
  borderRadius: theme.spacing(2),
}));
