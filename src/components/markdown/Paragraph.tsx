import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

export const Paragraph = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 2, 2),
})).withComponent("div");
