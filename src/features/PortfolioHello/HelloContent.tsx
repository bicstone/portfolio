import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const HelloContent = (): JSX.Element => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} css={{ textAlign: "center" }}>
        <img
          width={100}
          height={100}
          src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
          loading="eager"
          decoding="async"
          alt="ニコニコした Oishi Takanori の似顔絵"
          css={(theme) => ({ margin: theme.spacing(0, 2) })}
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
