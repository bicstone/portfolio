import { Card, CardHeader } from "@mui/material";
import React from "react";

/**
 * 左にAvatarが付いたカード
 */
export const AvatarCard: React.FC<React.ComponentProps<typeof CardHeader>> = (
  props
) => {
  return (
    <Card>
      <CardHeader {...props} />
    </Card>
  );
};
