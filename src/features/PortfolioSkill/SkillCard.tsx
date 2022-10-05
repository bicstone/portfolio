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

import { SkillGroupDetail } from "./SkillGroupDetail";

import type { PortfolioSkillCardFragment } from "@/generated/graphqlTypes";
import type { Breakpoint } from "@mui/material";

import { CollapseResponsiveController } from "@/components/CollapseResponsiveController";

export const query = graphql`
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

export const SkillCard = (props: {
  skill: PortfolioSkillCardFragment;
}): JSX.Element => {
  const { skill } = props;

  return (
    <Grid item xs={12} sm={6} md={4} key={skill.id}>
      <Card component="section">
        <CollapseResponsiveController
          defaultExpanded={skill.expanded}
          defaultExpandedBreakpoints={defaultExpandedBreakpoints}
        >
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${skill.id}-content`}
              id={`${skill.id}-header`}
            >
              <Typography component="h2" variant="h6">
                {skill.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div css={(theme) => ({ padding: theme.spacing(2) })}>
                {skill.skillGroups.map((skillGroup) => (
                  <SkillGroupDetail
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