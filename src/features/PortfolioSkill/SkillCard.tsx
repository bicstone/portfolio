import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

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

  return (
    <Grid item xs={12} sm={6} md={4} component="section">
      <Card>
        <CardHeader
          title={
            <Typography component="h2" variant="h6">
              {skill.name}
            </Typography>
          }
          subheader={
            <div css={(theme) => ({ padding: theme.spacing(1) })}>
              {skill.skillGroups.map((skillGroup) => (
                <SkillGroupDetail key={skillGroup.id} skillGroup={skillGroup} />
              ))}
            </div>
          }
          disableTypography
        />
      </Card>
    </Grid>
  );
};
