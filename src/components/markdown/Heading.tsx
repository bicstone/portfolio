import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import { slug } from "github-slugger";

import { AnchorLink } from "./AnchorLink";

export const StyledTypography = styled(Typography)(({ theme }) => ({
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

export const Heading = <T extends React.ElementType>({
  children,
  prefix,
  ...props
}: TypographyProps<T> & {
  component: T;
  prefix: string;
}): JSX.Element => {
  const id = slug(children as string);
  return (
    <StyledTypography {...props} id={id}>
      {prefix.length > 0 && (
        <AnchorLink href={`#${id}`} underline="hover">
          {prefix}
        </AnchorLink>
      )}
      <Box display="inline-block" mr={0.5} />
      {children}
    </StyledTypography>
  );
};
