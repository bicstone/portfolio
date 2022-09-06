import { Card, CardHeader } from "@mui/material";

import type { ComponentProps } from "react";

/**
 * 左にAvatarが付いたカード
 */
export const AvatarCard = (
  props: ComponentProps<typeof CardHeader>
): JSX.Element => {
  return (
    <Card>
      <CardHeader {...props} />
    </Card>
  );
};
