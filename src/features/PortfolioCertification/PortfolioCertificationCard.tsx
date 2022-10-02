import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  List,
} from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioCertificationDetail } from "./PortfolioCertificationDetail";

import type { PortfolioCertificationCardFragment } from "@/generated/graphqlTypes";
import type { Breakpoint } from "@mui/material";

import { CollapseResponsiveController } from "@/components/CollapseResponsiveController";

const defaultExpandedBreakpoints: Breakpoint[] = ["xl", "lg", "md"];

export const PortfolioCertificationCardQuery = graphql`
  fragment PortfolioCertificationCard on ContentfulQualificationMap {
    id
    name
    expanded
    qualifications {
      id
      ...PortfolioCertificationDetail
    }
  }
`;

export const PortfolioCertificationCard = (props: {
  certification: PortfolioCertificationCardFragment;
}): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} component="section">
      <CollapseResponsiveController
        defaultExpanded={props.certification.expanded}
        defaultExpandedBreakpoints={defaultExpandedBreakpoints}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${props.certification.id}-content`}
            id={`${props.certification.id}-header`}
          >
            <Typography component="h2" variant="h6">
              {props.certification.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {props.certification.qualifications.map((certification) => (
                <PortfolioCertificationDetail
                  key={certification.id}
                  certification={certification}
                />
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      </CollapseResponsiveController>
    </Grid>
  );
};
