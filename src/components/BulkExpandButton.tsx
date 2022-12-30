import UnfoldLessIcon from "@mui/icons-material/UnfoldLessRounded";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMoreRounded";
import Button from "@mui/material/Button";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const BulkExpandButton = (props: {
  expanded: boolean;
  onClick: () => void;
}): JSX.Element => {
  const { expanded, onClick } = props;

  return (
    <Button
      css={(theme) => ({
        backgroundColor: theme.vars.palette.background.default,
        "&:hover": {
          backgroundColor: theme.vars.palette.background.default,
        },
      })}
      variant="outlined"
      color="secondary"
      size="small"
      endIcon={expanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
      onClick={onClick}
      aria-label={TRANSLATION.bulkExpandButton.hint}
    >
      {expanded
        ? TRANSLATION.bulkExpandButton.label.allLess
        : TRANSLATION.bulkExpandButton.label.allMore}
    </Button>
  );
};
