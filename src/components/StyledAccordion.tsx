import styled from "@emotion/styled";
import { Accordion } from "@mui/material";

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  "&:before": {
    display: "none",
  },
}));
