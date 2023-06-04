import Grid from "@mui/material/Grid";
import { graphql } from "gatsby";

import { CertificationCard } from "./CertificationCard";

import type { PortfolioCertificationListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioCertificationList on CertificationsYamlConnection {
    group(field: { category: SELECT }) {
      fieldValue
      nodes {
        ...PortfolioCertificationCard
      }
    }
  }
`;

export const CertificationList = (props: {
  certifications: PortfolioCertificationListFragment;
}): JSX.Element => {
  const { certifications } = props;

  const filteredCertifications = (fieldValue: string) => {
    return certifications.group.find((group) => group.fieldValue === fieldValue)
      .nodes;
  };

  return (
    <Grid container spacing={2}>
      <CertificationCard
        category="主な資格"
        certifications={filteredCertifications("主な資格")}
      />
      <CertificationCard
        category="その他のIT資格"
        certifications={filteredCertifications("その他のIT資格")}
      />
      <CertificationCard
        category="その他の工学資格"
        certifications={filteredCertifications("その他の工学資格")}
      />
    </Grid>
  );
};
