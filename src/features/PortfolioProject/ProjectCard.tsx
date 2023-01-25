import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { memo, useMemo } from "react";

import type { PortfolioProjectCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioProjectCard on ContentfulProject {
    id
    name
    tags {
      name
    }
    icon {
      name
      svg {
        svg
      }
    }
    startDate
  }
`;

export const ProjectCard = memo(
  (props: { project: PortfolioProjectCardFragment }): JSX.Element => {
    const { project } = props;

    const startYear = useMemo(() => {
      return formatDateTime(project.startDate, "yyyy");
    }, [project.startDate]);

    return (
      <CardHeader
        css={(theme) => ({
          "&:not(:last-of-type)": {
            borderBottom: `1px solid ${theme.vars.palette.divider}`,
          },
        })}
        avatar={
          <SvgAvatar name={project.icon.name} svg={project.icon.svg.svg} />
        }
        title={
          <>
            <Typography variant="body2" component="div" color="textSecondary">
              {startYear}年
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
                key={tag.name}
                label={tag.name}
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
