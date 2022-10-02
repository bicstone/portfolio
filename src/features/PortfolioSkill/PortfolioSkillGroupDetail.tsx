import { Typography, Chip } from "@mui/material";
import { graphql } from "gatsby";

import type { PortfolioSkillGroupDetailFragment } from "@/generated/graphqlTypes";

export const PortfolioSkillGroupDetailQuery = graphql`
  fragment PortfolioSkillGroupDetail on ContentfulSkillGrpup {
    name
    skills {
      id
      level
      name
    }
  }
`;

export const PortfolioSkillGroupDetail = (props: {
  skillGroup: PortfolioSkillGroupDetailFragment;
}): JSX.Element => {
  return (
    <>
      <Typography component="h3" variant="subtitle1" gutterBottom>
        {props.skillGroup.name}
      </Typography>
      <ul
        css={(theme) => ({
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          listStyle: "none",
          margin: 0,
          marginBottom: theme.spacing(2),
          padding: 0,
        })}
      >
        {props.skillGroup.skills.map((skill) => (
          <li key={skill.id}>
            <Chip variant="outlined" size="small" label={skill.name} />
          </li>
        ))}
      </ul>
    </>
  );
};
