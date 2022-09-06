import { Card, CardHeader } from "@mui/material";

import type { ComponentProps, ReactNode } from "react";

export interface MediaCardProps {
  media?: ReactNode;
}

/**
 * 上にMediaが付いたカード
 */
export const MediaCard = ({
  media,
  ...props
}: ComponentProps<typeof CardHeader> & MediaCardProps): JSX.Element => {
  return (
    <Card>
      {media}
      <CardHeader {...props} />
    </Card>
  );
};
