import styled from "@emotion/styled";
import { Accordion } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&:before": {
    display: "none",
  },
  "&:first-of-type": {
    borderTopLeftRadius: theme.spacing(1.5),
    borderTopRightRadius: theme.spacing(1.5),
  },
  "&:last-of-type": {
    borderBottomLeftRadius: theme.spacing(1.5),
    borderBottomRightRadius: theme.spacing(1.5),
  },
}));
