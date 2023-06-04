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
    name
    tags
    startDate
    href
  }
`;

export const OssCard = (props: {
  oss: PortfolioOssCardFragment;
}): JSX.Element => {
  const { oss } = props;
  const startYear = formatDateTime(oss.startDate, "yyyy/MM");

  return (
    <Card component="section">
      <CardActionArea
        title={oss.name}
        href={oss.href}
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
                {oss.name}
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
