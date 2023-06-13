import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Link, withPrefix } from "gatsby";

export interface TimelineTabListProps {
  path: string;
}

export const TimelineTabList = ({
  path,
}: TimelineTabListProps): JSX.Element => {
  return (
    <ToggleButtonGroup value={path} color="secondary" exclusive fullWidth>
      <ToggleButton component={Link} value={withPrefix("/")} to="/">
        All
      </ToggleButton>
      <ToggleButton
        component={Link}
        value={withPrefix("/outputs")}
        to="/outputs"
      >
        Outputs
      </ToggleButton>
      <ToggleButton
        component={Link}
        value={withPrefix("/projects")}
        to="/projects"
      >
        Projects
      </ToggleButton>
      <ToggleButton
        component={Link}
        value={withPrefix("/histories")}
        to="/histories"
      >
        Histories
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
