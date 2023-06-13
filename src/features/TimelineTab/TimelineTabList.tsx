import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { Link } from "gatsby";

const SelectedClassName = "selected";

const StyledTab = styled(Button)(({ theme }) => ({
  background: theme.vars.palette.background.paper,
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: theme.spacing(1.5),
  color: theme.vars.palette.text.primary,
  fontWeight: "bold",
  lineHeight: 1.25,
  margin: 0,
  minHeight: 0,
  minWidth: theme.spacing(8),
  padding: theme.spacing(1, 2),
  textTransform: "none",
  width: theme.spacing(14),
  [`&.${SelectedClassName}`]: {
    background: theme.vars.palette.secondary.main,
    color: theme.vars.palette.secondary.contrastText,
  },
})) as typeof Button;

export const TimelineTabList = (): JSX.Element => {
  return (
    <div
      css={(theme) => ({
        display: "flex",
        gap: theme.spacing(2),
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "none",
        whiteSpace: "nowrap",
        width: "100%",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      })}
    >
      <StyledTab component={Link} to="/" activeClassName={SelectedClassName}>
        All
      </StyledTab>
      <StyledTab
        component={Link}
        to="/outputs"
        activeClassName={SelectedClassName}
      >
        Outputs
      </StyledTab>
      <StyledTab
        component={Link}
        to="/projects"
        activeClassName={SelectedClassName}
      >
        Projects
      </StyledTab>
      <StyledTab
        component={Link}
        to="/histories"
        activeClassName={SelectedClassName}
      >
        Histories
      </StyledTab>
    </div>
  );
};
