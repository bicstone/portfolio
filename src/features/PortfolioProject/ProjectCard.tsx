import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import CardHeader from "@mui/material/CardHeader";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { memo, useMemo } from "react";

import { ProjectDetail } from "./ProjectDetail";

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
    ...PortfolioProjectDetail
  }
`;

// `Accordion` is heavy, so this component was memoized.
export const ProjectCard = memo(
  (props: {
    project: PortfolioProjectCardFragment;
    expanded: boolean;
    onChange: (id: string) => void;
  }): JSX.Element => {
    const { project, expanded, onChange } = props;

    const startYear = useMemo(() => {
      return formatDateTime(project.startDate, "yyyy");
    }, [project.startDate]);

    return (
      <Accordion
        expanded={expanded}
        disableGutters
        onChange={() => onChange(project.id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${project.id}-content`}
          id={`${project.id}-header`}
        >
          <CardHeader
            css={{ padding: 0 }}
            avatar={
              <SvgAvatar name={project.icon.name} svg={project.icon.svg.svg} />
            }
            title={
              <>
                <Typography
                  variant="body2"
                  component="div"
                  color="textSecondary"
                >
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
        </AccordionSummary>
        <AccordionDetails>
          <ProjectDetail project={project} />
        </AccordionDetails>
      </Accordion>
    );
  }
);
ProjectCard.displayName = "ProjectCard";
