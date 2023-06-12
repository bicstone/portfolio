import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const BioHelloCard = (props: CardProps): JSX.Element => {
  return (
    <Card {...props} component="article">
      <CardActionArea component={RouterLink} to="/me" css={{ height: "100%" }}>
        <CardHeader
          disableTypography
          title={
            <Typography component="p" variant="h6" gutterBottom>
              {TRANSLATION.hello.title}
            </Typography>
          }
          subheader={
            <>
              <Typography
                variant="body2"
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
                {TRANSLATION.hello.description}
              </Typography>

              <Typography variant="body2" color="secondary">
                もっと詳しく
              </Typography>
            </>
          }
        />
      </CardActionArea>
    </Card>
  );
};
