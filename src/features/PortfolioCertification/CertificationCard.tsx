import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import { CertificationDetail } from "./CertificationDetail";

import type { PortfolioCertificationCardFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioCertificationCard on CertificationsYaml {
    name
    certifications {
      startDate
      ...PortfolioCertificationDetail
    }
  }
`;

export const CertificationCard = (props: {
  group: PortfolioCertificationCardFragment;
}): JSX.Element => {
  const { group } = props;

  const sortedCertifications = Array.from(group.certifications).sort((a, b) => {
    if (a.startDate > b.startDate) {
      return -1;
    }
    if (a.startDate < b.startDate) {
      return 1;
    }
    return 0;
  });

  return (
    <Grid item xs={12} sm={6} md={4} component="section">
      <Card>
        <CardHeader
          title={
            <Typography component="h2" variant="h6">
              {group.name}
            </Typography>
          }
          subheader={
            <List dense>
              {sortedCertifications.map((certification) => (
                <CertificationDetail
                  key={certification.name}
                  certification={certification}
                />
              ))}
            </List>
          }
          disableTypography
        />
      </Card>
    </Grid>
  );
};
