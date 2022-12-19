import { ExpandMoreRounded as ExpandMoreIcon } from "@mui/icons-material";
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  List,
} from "@mui/material";
import { graphql } from "gatsby";
import { useCallback, useState } from "react";

import { CertificationDetail } from "./CertificationDetail";

import type { PortfolioCertificationCardFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioCertificationCard on ContentfulQualificationMap {
    id
    name
    qualifications {
      id
      ...PortfolioCertificationDetail
    }
  }
`;

export const CertificationCard = (props: {
  certification: PortfolioCertificationCardFragment;
}): JSX.Element => {
  const { certification } = props;

  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} component="section">
      <Accordion expanded={expanded} onChange={toggleExpanded}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${certification.id}-content`}
          id={`${certification.id}-header`}
        >
          <Typography component="h2" variant="h6">
            {certification.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List dense>
            {certification.qualifications.map((certification) => (
              <CertificationDetail
                key={certification.id}
                certification={certification}
              />
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};
