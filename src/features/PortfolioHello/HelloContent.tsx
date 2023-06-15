import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";

import { BicstoneLogo } from "@/components/logos/BicstoneLogo";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const HelloContent = (): JSX.Element => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} css={{ textAlign: "center" }}>
        <BicstoneLogo
          aria-hidden="true"
          css={(theme) => ({
            margin: theme.spacing(0, 2),
            width: theme.spacing(12),
            height: theme.spacing(12),
          })}
        />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Card>
          <CardHeader
            titleTypographyProps={{
              component: "p",
              variant: "h6",
              gutterBottom: true,
            }}
            title={TRANSLATION.hello.title}
            subheaderTypographyProps={{
              variant: "body2",
              gutterBottom: true,
            }}
            subheader={TRANSLATION.hello.description}
          />
        </Card>
      </Grid>
    </Grid>
  );
};
