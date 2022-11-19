import styled from "@emotion/styled";

export const Image = styled("img")(({ theme }) => ({
  borderRadius: theme.spacing(2),
  // Disable transparency to affected by the image.
  border: `1px solid ${
    theme.palette.mode === "dark"
      ? // rgba(255, 255, 255, 0.12)
        "#1f1f1f"
      : // rgba(0, 0, 0, 0.12)
        "#e0e0e0"
  }`,
}));
