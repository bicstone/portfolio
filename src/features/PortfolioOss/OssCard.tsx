import {
  Grid,
  CardHeader,
  Card,
  CardActionArea,
  Chip,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";
import { useMemo } from "react";

import type { PortfolioOssCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioOssCard on ContentfulOss {
    name
    tags {
      name
    }
    icon {
      name
      svg {
        svg
      }
    }
    startDate
    href
  }
`;

export const OssCard = (props: {
  oss: PortfolioOssCardFragment;
}): JSX.Element => {
  const { oss } = props;

  const startYear = useMemo(() => {
    return formatDateTime(oss.startDate, "yyyy/MM");
  }, [oss.startDate]);

  return (
    <Grid item xs={12} sm={6} md={4} component="section">
      <Card>
        <CardActionArea
          title={oss.name}
          href={oss.href}
          rel="external noreferrer noopener"
        >
          <CardHeader
            avatar={<SvgAvatar name={oss.icon.name} svg={oss.icon.svg.svg} />}
            title={
              <>
                <Typography
                  variant="body2"
                  component="div"
                  color="textSecondary"
                >
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
                  <Chip
                    variant="outlined"
                    size="small"
                    key={tag.name}
                    label={tag.name}
                  />
                ))}
              </Typography>
            }
            disableTypography
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};
