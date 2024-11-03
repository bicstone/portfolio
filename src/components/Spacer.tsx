import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";

export type SpacerProps =
  | {
      x: number;
      y?: null;
    }
  | {
      x?: null;
      y: number;
    };

export const SpacerBase = styled("span", {
  shouldForwardProp: (prop) =>
    isPropValid(prop) && prop !== "x" && prop !== "y",
})<SpacerProps>(({ x, y, theme }) => {
  const width = x ?? 1;
  const height = y ?? 1;
  return {
    display: "block",
    visibility: "hidden",
    width: theme.spacing(width),
    minWidth: theme.spacing(width),
    height: theme.spacing(height),
    minHeight: theme.spacing(height),
  };
});

export const Spacer = (
  props: SpacerProps & React.HTMLAttributes<HTMLSpanElement>,
): JSX.Element => <SpacerBase {...props} aria-hidden="true" />;
