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
    <ToggleButtonGroup
      id="timeline"
      size="large"
      value={path}
      color="secondary"
      exclusive
      fullWidth
    >
      <ToggleButton component={Link} value={withPrefix("/")} to="/#timeline">
        All
      </ToggleButton>
      <ToggleButton
        component={Link}
        value={withPrefix("/outputs")}
        to="/outputs#timeline"
      >
        Outputs
      </ToggleButton>
      <ToggleButton
        component={Link}
        value={withPrefix("/projects")}
        to="/projects#timeline"
      >
        Projects
      </ToggleButton>
      <ToggleButton
        component={Link}
        value={withPrefix("/histories")}
        to="/histories#timeline"
      >
        Histories
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
