import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { Tooltip, Typography, IconButton } from "@mui/material";
import { useState } from "react";

export const HeadingWithTooltip = (props: {
  title: string;
  tooltip: string;
}): JSX.Element => {
  const { title, tooltip } = props;

  const [isOpen, setIsOpen] = useState(false);

  const openTooltip = (): void => {
    setIsOpen(true);
  };

  const closeTooltip = (): void => {
    setIsOpen(false);
  };

  const toggleTooltip = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      css={(theme) => ({
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        marginBottom: theme.spacing(2),
        gap: theme.spacing(0.5),
      })}
    >
      <Typography component="h2" variant="h4">
        {title}
      </Typography>
      <Tooltip
        title={tooltip}
        open={isOpen}
        onOpen={openTooltip}
        onClose={closeTooltip}
        disableTouchListener
      >
        <IconButton
          size="small"
          color="primary"
          css={{ cursor: "help" }}
          onClick={toggleTooltip}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};
