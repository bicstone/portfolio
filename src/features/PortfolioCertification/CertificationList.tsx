import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { CertificationCard } from "./CertificationCard";

import type { PortfolioCertificationListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioCertificationList on ContentfulQualificationMap {
    id
    ...PortfolioCertificationCard
  }
`;

export const CertificationList = (props: {
  certifications: readonly PortfolioCertificationListFragment[];
}): JSX.Element => {
  const { certifications } = props;

  return (
    <Grid container spacing={2}>
      {certifications.map((certification) => (
        <CertificationCard
          key={certification.id}
          certification={certification}
        />
      ))}
    </Grid>
  );
};
