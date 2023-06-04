import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { memo } from "react";

import type { PortfolioProjectCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioProjectCard on ProjectsYaml {
    name
    tags
    icon
    startDate
    endDate
  }
`;

export const ProjectCard = memo(
  (props: { project: PortfolioProjectCardFragment }): JSX.Element => {
    const { project } = props;

    const startDate = formatDateTime(project.startDate, "yyyy/MM");
    const endDate = formatDateTime(project.endDate, "yyyy/MM");
    const formattedDate = `${startDate} - ${endDate}`;

    return (
      <CardHeader
        css={(theme) => ({
          "&:not(:last-of-type)": {
            borderBottom: `1px solid ${theme.vars.palette.divider}`,
          },
        })}
        avatar={<SvgAvatar aria-hidden="true" svg={project.icon} />}
        title={
          <>
            <Typography variant="body2" component="div" color="textSecondary">
              {formattedDate}
            </Typography>
            <Typography component="h2" variant="h6">
              {project.name}
            </Typography>
          </>
        }
        subheader={
          <Typography
            variant="body2"
            component="div"
            role="list"
            aria-label="tags"
          >
            {project.tags.map((tag) => (
              <Chip
                variant="outlined"
                size="small"
                key={tag}
                label={tag}
                role="listitem"
                css={(theme) => ({
                  color: theme.vars.palette.text.secondary,
                })}
              />
            ))}
          </Typography>
        }
        disableTypography
      />
    );
  }
);
ProjectCard.displayName = "ProjectCard";
