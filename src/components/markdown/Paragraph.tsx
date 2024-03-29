import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

export const Paragraph = styled(Typography)(({ theme }) => ({
  margin: theme.spacing(0, 2, 2),
})).withComponent("div");
