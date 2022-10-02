import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioCertificationCard } from "./PortfolioCertificationCard";

import type { PortfolioCertificationListFragment } from "@/generated/graphqlTypes";

export const PortfolioCertificationListQuery = graphql`
  fragment PortfolioCertificationList on ContentfulQualificationMap {
    id
    ...PortfolioCertificationCard
  }
`;

export const PortfolioCertificationList = (props: {
  certifications: PortfolioCertificationListFragment[];
}): JSX.Element => {
  return (
    <Grid container spacing={2}>
      {props.certifications.map((certification) => (
        <PortfolioCertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </Grid>
  );
};
