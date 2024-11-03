import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const BioHelloCard = (props: CardProps): React.JSX.Element => (
  <Card component="aside" {...props}>
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
            {TRANSLATION.hello.title}
          </Typography>
        }
        subheader={
          <>
            <Typography
              variant="body2"
              component="h2"
              color="text.secondary"
              css={(theme) => ({
                display: "-webkit-box",
                maxHeight: "5rem",
                overflow: "hidden",
                marginBottom: theme.spacing(1),
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                wordBreak: "break-all",
              })}
            >
              Webエンジニア ･ Certified ScrumMaster ･ アマチュア技術広報 ･
              電気工事士 ･
              機械エンジニアです。技術だけにこだわらずに広い視野を持ち、
              多角的なアプローチで迅速かつ効果的にプロダクトの価値を最大化し、
              社会やステークホルダーの課題解決に貢献します。
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
);
