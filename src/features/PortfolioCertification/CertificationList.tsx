import Grid from "@mui/material/Grid";
import { graphql } from "gatsby";

import { CertificationCard } from "./CertificationCard";

import type { PortfolioCertificationListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioCertificationList on CertificationsYamlConnection {
    nodes {
      sortKey
      ...PortfolioCertificationCard
    }
  }
`;

export const CertificationList = (props: {
  certifications: PortfolioCertificationListFragment;
}): JSX.Element => {
  const { certifications } = props;

  return (
    <Grid container spacing={2}>
      {certifications.nodes.map((group) => (
        <CertificationCard key={group.sortKey} group={group} />
      ))}
    </Grid>
  );
};
