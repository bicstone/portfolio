import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import { ExternalLink } from "@/components/ExternalLink";
import { TwitterLogo } from "@/components/logos/TwitterLogo";

export const BioLaprasScoreCard = (props: CardProps): JSX.Element => {
  return (
    <Card component="article" {...props}>
      <CardActionArea
        href="https://lapras.com/public/bicstone"
        rel="external noopener"
        title="Laprasプロフィールを表示"
      >
        <CardHeader
          disableTypography
          avatar={<TwitterLogo aria-hidden="true" />}
          title={
            <Typography component="h2" variant="h6" gutterBottom>
              <ExternalLink>Findy</ExternalLink>
            </Typography>
          }
          subheader={
            <>
              <Typography variant="body1" component="h2">
                スキル偏差値
              </Typography>
              <Typography variant="body1">.0</Typography>
              <Typography variant="body1">.0</Typography>
              <Typography variant="body1">.0</Typography>
            </>
          }
        />
      </CardActionArea>
    </Card>
  );
};
