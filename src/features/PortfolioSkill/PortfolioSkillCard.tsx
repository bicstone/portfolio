import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Grid,
  Card,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioSkillGroupDetail } from "./PortfolioSkillGroupDetail";

import type { PortfolioSkillCardFragment } from "@/generated/graphqlTypes";
import type { Breakpoint } from "@mui/material";

import { CollapseResponsiveController } from "@/components/CollapseResponsiveController";

export const PortfolioSkillCardQuery = graphql`
  fragment PortfolioSkillCard on ContentfulSkillMap {
    id
    name
    expanded
    skillGroups {
      id
      ...PortfolioSkillGroupDetail
    }
  }
`;

const defaultExpandedBreakpoints: Breakpoint[] = ["xl", "lg", "md"];

export const PortfolioSkillCard = (props: {
  skill: PortfolioSkillCardFragment;
}): JSX.Element => {
  return (
    <Grid item xs={12} sm={6} md={4} key={props.skill.id}>
      <Card component="section">
        <CollapseResponsiveController
          defaultExpanded={props.skill.expanded}
          defaultExpandedBreakpoints={defaultExpandedBreakpoints}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${props.skill.id}-content`}
              id={`${props.skill.id}-header`}
            >
              <Typography component="h2" variant="h6">
                {props.skill.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div css={(theme) => ({ padding: theme.spacing(2) })}>
                {props.skill.skillGroups.map((skillGroup) => (
                  <PortfolioSkillGroupDetail
                    key={skillGroup.id}
                    skillGroup={skillGroup}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </CollapseResponsiveController>
      </Card>
    </Grid>
  );
};
