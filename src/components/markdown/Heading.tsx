import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

export const Heading = styled(Typography)(({ theme }) => ({
  display: "block",
  position: "relative",
  // marginTop = (AppBar height) 6 + (Typography margin) 2 = 8
  // negative top margin for anchor link
  marginTop: theme.spacing(-2),
  padding: theme.spacing(8, 2, 3, 2),
  fontWeight: "bold",
  "&::before": {
    content: '""',
    position: "absolute",
    top: theme.spacing(6 + 2),
    bottom: theme.spacing(3),
    left: 0,
    height: "auto",
    width: theme.spacing(0.5),
    backgroundColor: theme.vars.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
  },
}));
