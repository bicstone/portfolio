import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardHeader,
  Typography,
} from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo } from "react";

import type { PortfolioHistoryCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioHistoryCard on ContentfulHistory {
    id
    date
    name
    subName
    icon {
      name
      svg {
        svg
      }
    }
  }
`;

export const HistoryCard = (props: {
  history: PortfolioHistoryCardFragment;
  expanded: boolean;
  onChange: (id: string) => void;
}): JSX.Element => {
  const { history, expanded, onChange } = props;

  const { t } = useI18next();

  const year = useMemo(() => {
    return formatDateTime(history.date, "yyyy");
  }, [history.date]);

  return (
    <Accordion
      expanded={expanded}
      disableGutters
      onChange={() => onChange(history.id)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${history.id}-content`}
        id={`${history.id}-header`}
      >
        <CardHeader
          css={{ padding: 0 }}
          avatar={
            <SvgAvatar name={history.icon.name} svg={history.icon.svg.svg} />
          }
          title={
            <>
              <Typography variant="body2" component="div" color="textSecondary">
                {t("histories.date", { date: year })}
              </Typography>
              <Typography component="h2" variant="h6">
                {history.name}
              </Typography>
            </>
          }
          disableTypography
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="body2"
          component="div"
          css={(theme) => ({ margin: theme.spacing(2) })}
        >
          {history.subName}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
