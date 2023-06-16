import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { BicstoneLogo } from "@/components/logos/BicstoneLogo";

export const HelloContent = ({
  linkToHome = false,
}: {
  linkToHome?: boolean;
}): JSX.Element => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sm={3}
        md={2}
        component="aside"
        css={{ textAlign: "center" }}
      >
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
          <CardActionArea
            component={RouterLink}
            to={linkToHome ? "/" : "/me"}
            css={{ height: "100%" }}
            title={linkToHome ? "ホームに戻る" : "もっと詳しく"}
          >
            <CardHeader
              disableTypography
              title={
                <Typography component="h2" variant="h6" gutterBottom>
                  おおいし (@bicstone)
                </Typography>
              }
              subheader={
                <>
                  <Typography
                    variant="body2"
                    component="h2"
                    color="text.secondary"
                    gutterBottom
                  >
                    Webエンジニア / Certified ScrumMaster® /
                    情報処理安全確保支援士 (017758号) / 電気工事士 /
                    機械エンジニアです。
                    様々な分野の知見を活かしジェネラリストとしてプロダクトに幅広く携わり、
                    相互成長し続けられるエンジニアを目指しています。
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {linkToHome ? "ホームに戻る" : "もっと詳しく"}
                  </Typography>
                </>
              }
            />
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};
