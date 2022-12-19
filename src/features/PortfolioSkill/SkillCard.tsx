import { ExpandMoreRounded as ExpandMoreIcon } from "@mui/icons-material";
import {
  Grid,
  Card,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";
import { useCallback, useState } from "react";

import { SkillGroupDetail } from "./SkillGroupDetail";

import type { PortfolioSkillCardFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioSkillCard on ContentfulSkillMap {
    id
    name
    skillGroups {
      id
      ...PortfolioSkillGroupDetail
    }
  }
`;

export const SkillCard = (props: {
  skill: PortfolioSkillCardFragment;
}): JSX.Element => {
  const { skill } = props;

  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = useCallback(() => {
    setExpanded((prevExpanded) => !prevExpanded);
  }, []);

  return (
    <Grid item xs={12} sm={6} md={4} key={skill.id}>
      <Card component="section">
        <Accordion expanded={expanded} onChange={toggleExpanded}>
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
                <SkillGroupDetail key={skillGroup.id} skillGroup={skillGroup} />
              ))}
            </div>
          </AccordionDetails>
        </Accordion>
      </Card>
    </Grid>
  );
};
