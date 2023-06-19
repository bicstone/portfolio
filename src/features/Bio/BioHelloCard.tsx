import Card, { type CardProps } from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const BioHelloCard = (props: CardProps): JSX.Element => {
  return (
    <Card component="aside" {...props}>
      <CardActionArea
        component={RouterLink}
        to="/me"
        sx={{ height: "100%" }}
        title="もっと詳しく"
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
                sx={{
                  display: "-webkit-box",
                  maxHeight: "5rem",
                  overflow: "hidden",
                  marginBottom: 1,
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4,
                  wordBreak: "break-all",
                }}
              >
                {TRANSLATION.hello.description}
              </Typography>

              <Typography
                variant="body2"
                color="secondary"
                sx={{ textDecoration: "underline" }}
              >
                もっと詳しく
              </Typography>
            </>
          }
        />
      </CardActionArea>
    </Card>
  );
};
