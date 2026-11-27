import Card, { type CardProps } from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const BioHelloCard = (props: CardProps): React.JSX.Element => (
  <Card component="aside" {...props}>
    <CardHeader
      disableTypography
      title={
        <Typography
          component="h2"
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: "bold",
          }}
        >
          {TRANSLATION.hello.title}
        </Typography>
      }
      subheader={
        <Typography
          variant="body2"
          component="h2"
          sx={{
            color: "text.secondary",
          }}
        >
          Webエンジニア ･ Certified ScrumMaster ･ アマチュア技術広報 ･
          電気工事士 ･
          機械エンジニアです。技術だけにこだわらずに広い視野を持ち、
          多角的なアプローチで迅速かつ効果的にプロダクトの価値を最大化し、
          社会やステークホルダーの課題解決に貢献します。
        </Typography>
      }
    />
  </Card>
);
