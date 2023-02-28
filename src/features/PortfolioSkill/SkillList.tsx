import Grid from "@mui/material/Grid";
import { graphql } from "gatsby";

import { SkillCard } from "./SkillCard";

import type { PortfolioSkillListFragment } from "@/generated/graphqlTypes";

export const query = graphql`
  fragment PortfolioSkillList on ContentfulSkillMap {
    id
    ...PortfolioSkillCard
  }
`;

export const SkillList = (props: {
  skills: readonly PortfolioSkillListFragment[];
}): JSX.Element => {
  const { skills } = props;

  return (
    <Grid container spacing={2}>
      {skills.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </Grid>
  );
};
