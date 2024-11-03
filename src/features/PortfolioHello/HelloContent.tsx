import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { BicstoneIcon } from "@/components/icons/BicstoneIcon";
import { SITE_METADATA } from "@/constants/SITE_METADATA";

export const HelloContent = (): React.JSX.Element => (
  <Grid container spacing={2} justifyContent="center" alignItems="center">
    <Grid
      item
      xs={12}
      sm={3}
      md={2}
      component="aside"
      css={{ textAlign: "center" }}
    >
      <BicstoneIcon
        aria-hidden="true"
        css={(theme) => ({
          margin: theme.spacing(0, 2),
          width: theme.spacing(12),
          height: theme.spacing(12),
        })}
      />
    </Grid>
    <Grid item xs={12} sm={9} md={10}>
      <Card variant="elevation">
        <CardActionArea
          href={SITE_METADATA.profileLink}
          rel="external noopener follow me"
          target="_blank"
          css={{ height: "100%" }}
          title="外部リンクのため、別ウインドウで開きます"
        >
          <CardHeader
            disableTypography
            title={
              <Typography
                component="h2"
                variant="h6"
                fontWeight="bold"
                gutterBottom
              >
                大石 貴則 (@bicstone)
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
                  Webプロダクトエンジニア、 情報処理安全確保支援士 (017758号)、
                  認定スクラムマスター (CSM®)です。
                  迅速かつ効果的にプロダクト価値を最大化し、
                  社会やステークホルダーの課題解決に貢献できるエンジニアを目指しています。
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary"
                  css={{ textDecoration: "underline" }}
                >
                  もっと詳しく
                </Typography>
              </>
            }
          />
        </CardActionArea>
      </Card>
    </Grid>
  </Grid>
);
