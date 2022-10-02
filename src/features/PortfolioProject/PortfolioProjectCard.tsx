import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  CardHeader,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
} from "@mui/material";
import { graphql } from "gatsby";
import { useMemo } from "react";
import { SvgAvatar } from "src/components";

import { PortfolioProjectDetail } from "./PortfolioProjectDetail";

import type { PortfolioProjectCardFragment } from "@/generated/graphqlTypes";

import { formatDateTime } from "@/utils/format";

export const PortfolioProjectCardQuery = graphql`
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

export const PortfolioProjectCard = (props: {
  project: PortfolioProjectCardFragment;
  expanded: boolean;
  onChange: (id: string) => void;
}): JSX.Element => {
  const startYear = useMemo(() => {
    return formatDateTime(props.project.startDate, "yyyy");
  }, [props.project.startDate]);

  return (
    <Accordion
      expanded={props.expanded}
      onChange={() => props.onChange(props.project.id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${props.project.id}-content`}
        id={`${props.project.id}-header`}
      >
        <CardHeader
          css={{ padding: 0 }}
          avatar={
            <SvgAvatar
              name={props.project.icon.name}
              svg={props.project.icon.svg.svg}
            />
          }
          title={
            <>
              <Typography variant="body2" component="div" color="textSecondary">
                {startYear}年
              </Typography>
              <Typography component="h2" variant="h6">
                {props.project.name}
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
              {props.project.tags.map((tag) => (
                <Chip
                  variant="outlined"
                  size="small"
                  key={tag.name}
                  label={tag.name}
                  role="listitem"
                />
              ))}
            </Typography>
          }
          disableTypography
        />
      </AccordionSummary>
      <AccordionDetails>
        <PortfolioProjectDetail project={props.project} />
      </AccordionDetails>
    </Accordion>
  );
};
