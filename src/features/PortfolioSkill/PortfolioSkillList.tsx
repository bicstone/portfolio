import { Grid } from "@mui/material";
import { graphql } from "gatsby";

import { PortfolioSkillCard } from "./PortfolioSkillCard";

import type { PortfolioSkillListFragment } from "@/generated/graphqlTypes";

export const PortfolioSkillListQuery = graphql`
  fragment PortfolioSkillList on ContentfulSkillMap {
    id
    ...PortfolioSkillCard
  }
`;

export const PortfolioSkillList = (props: {
  skills: readonly PortfolioSkillListFragment[];
}): JSX.Element => {
  return (
    <Grid container spacing={2}>
      {props.skills.map((skill) => (
        <PortfolioSkillCard key={skill.id} skill={skill} />
      ))}
    </Grid>
  );
};
