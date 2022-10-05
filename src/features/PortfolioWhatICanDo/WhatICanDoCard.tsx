import { Grid, CardHeader, Card } from "@mui/material";
import { graphql } from "gatsby";

import type { PortfolioWhatICanDoCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";

export const query = graphql`
  fragment PortfolioWhatICanDoCard on ContentfulWhatICanDo {
    name
    subName
    icon {
      name
      svg {
        svg
      }
    }
  }
`;

export const WhatICanDoCard = (props: {
  whatICanDo: PortfolioWhatICanDoCardFragment;
}): JSX.Element => {
  const { whatICanDo } = props;

  return (
    <Grid component="section" item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={
            <SvgAvatar
              name={whatICanDo.icon.name}
              svg={whatICanDo.icon.svg.svg}
            />
          }
          title={whatICanDo.name}
          titleTypographyProps={{ component: "h2", variant: "h6" }}
          subheader={whatICanDo.subName}
          subheaderTypographyProps={{
            variant: "body2",
            color: "text.secondary",
          }}
        />
      </Card>
    </Grid>
  );
};
