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
import { SvgAvatar } from "src/components";

import type { PortfolioOssCardFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const PortfolioOssCardQuery = graphql`
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

export const PortfolioOssCard = (props: {
  oss: PortfolioOssCardFragment;
}): JSX.Element => {
  const startYear = useMemo(() => {
    return formatDateTime(props.oss.startDate, "yyyy/MM");
  }, [props.oss.startDate]);

  return (
    <Grid item xs={12} sm={6} md={4} component="section">
      <Card>
        <CardActionArea
          title={props.oss.name}
          href={props.oss.href}
          rel="external noreferrer noopener"
        >
          <CardHeader
            avatar={
              <SvgAvatar
                name={props.oss.icon.name}
                svg={props.oss.icon.svg.svg}
              />
            }
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
                  {props.oss.name}
                </Typography>
              </>
            }
            subheader={
              <Typography variant="body2" component="div" color="textSecondary">
                {props.oss.tags.map((tag) => (
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
