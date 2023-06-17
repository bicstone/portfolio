import GitHubIcon from "@mui/icons-material/GitHub";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { PortfolioOssCardFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioOssCard on OssesYaml {
    title
    tags
    date
    url
  }
`;

export const OssCard = (props: {
  oss: PortfolioOssCardFragment;
}): JSX.Element => {
  const { oss } = props;
  const startYear = formatDateTime(oss.date, "yyyy/MM");

  return (
    <Card component="section" variant="outlined">
      <CardActionArea
        title={oss.title}
        href={oss.url}
        rel="external noopener"
        css={{ height: "100%" }}
      >
        <CardHeader
          avatar={<GitHubIcon aria-hidden="true" />}
          title={
            <>
              <Typography variant="body2" component="div" color="textSecondary">
                {startYear}～
              </Typography>
              <Typography component="h2" variant="h6">
                {oss.title}
              </Typography>
            </>
          }
          subheader={
            <Typography variant="body2" component="div" color="textSecondary">
              {oss.tags.map((tag) => (
                <Chip variant="outlined" size="small" key={tag} label={tag} />
              ))}
            </Typography>
          }
          disableTypography
        />
      </CardActionArea>
    </Card>
  );
};
