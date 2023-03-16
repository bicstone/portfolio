import styled from "@emotion/styled";
import Link from "@mui/material/Link";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import { slug } from "github-slugger";

export const StyledTypography = styled(Typography)(({ theme, variant }) => ({
  display: "block",
  position: "relative",
  // marginTop = (AppBar height) 6 + (Typography margin) 2 = 8
  // negative top margin for anchor link
  margin: theme.spacing(-2, 2, 2, 2),
  padding: theme.spacing(8, 0, 1, 0),
  fontWeight: "bold",
  borderBottom:
    variant === "h5" ? `1px solid ${theme.vars.palette.divider}` : undefined,
  "&:hover > a": {
    opacity: 1,
  },
}));

const StyledAnchorLink = styled(Link)(({ theme }) => ({
  color: theme.vars.palette.primary.main,
  opacity: 0,
  "&:focus, &:hover": {
    opacity: 1,
  },
  "&:focus-visible::before": {
    outline: "solid",
  },
  "&::before": {
    content: '"#"',
    position: "absolute",
    display: "block",
    marginLeft: `calc( -1ch - ${theme.spacing(0.5)} )`,
  },
}));

export const Heading = <T extends React.ElementType>({
  children,
  ...props
}: TypographyProps<T> & {
  component: T;
}): JSX.Element => {
  const id = slug(children as string);
  return (
    <StyledTypography {...props} id={id}>
      <StyledAnchorLink
        href={`#${id}`}
        underline="hover"
        title={`Link for ${String(children)}`}
        aria-label={`Link for ${String(children)}`}
      />
      {children}
    </StyledTypography>
  );
};
