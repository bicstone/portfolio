import { Grid, CardHeader, Card } from "@mui/material";
import { graphql } from "gatsby";
import { SvgAvatar } from "src/components";

import type { PortfolioWhatICanDoCardFragment } from "@/generated/graphqlTypes";

export const PortfolioWhatICanDoCardQuery = graphql`
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

export const PortfolioWhatICanDoCard = (props: {
  whatICanDo: PortfolioWhatICanDoCardFragment;
}): JSX.Element => {
  return (
    <Grid component="section" item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          avatar={
            <SvgAvatar
              name={props.whatICanDo.icon.name}
              svg={props.whatICanDo.icon.svg.svg}
            />
          }
          title={props.whatICanDo.name}
          titleTypographyProps={{ component: "h2", variant: "h6" }}
          subheader={props.whatICanDo.subName}
          subheaderTypographyProps={{
            variant: "body2",
            color: "text.secondary",
          }}
        />
      </Card>
    </Grid>
  );
};
