import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

export interface WhatICanDoCardProps {
  avatar: JSX.Element;
  name: string;
  subName: string;
}

export const WhatICanDoCard = ({
  avatar,
  name,
  subName,
}: WhatICanDoCardProps): JSX.Element => {
  return (
    <Card component="section" variant="outlined">
      <CardHeader
        avatar={<Avatar aria-hidden="true">{avatar}</Avatar>}
        title={name}
        titleTypographyProps={{
          component: "h2",
          variant: "h6",
          fontWeight: "bold",
        }}
        subheader={subName}
        subheaderTypographyProps={{
          variant: "body2",
          color: "text.secondary",
        }}
      />
    </Card>
  );
};
