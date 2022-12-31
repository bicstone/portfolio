import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";

import type { ComponentProps } from "react";

interface ExpandButtonProps extends ComponentProps<typeof IconButton> {
  expanded: boolean;
}

export const ExpandButton = styled((props: ExpandButtonProps) => {
  const { expanded, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expanded }) => ({
  transform: !expanded ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
