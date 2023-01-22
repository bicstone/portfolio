import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { memo, useMemo } from "react";

import type { PortfolioHistoryCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { TRANSLATION } from "@/constants/TRANSLATION";
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

// `Accordion` is heavy, so this component was memoized.
export const HistoryCard = memo(
  (props: {
    history: PortfolioHistoryCardFragment;
    expanded: boolean;
    onChange: (id: string) => void;
  }): JSX.Element => {
    const { history, expanded, onChange } = props;

    const year = useMemo(() => {
      return formatDateTime(history.date, "yyyy");
    }, [history.date]);

    return (
      <Accordion
        expanded={expanded}
        disableGutters
        onChange={() => {
          onChange(history.id);
        }}
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
                <Typography
                  variant="body2"
                  component="div"
                  color="textSecondary"
                >
                  {`${year} ${TRANSLATION.histories.date}`}
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
  }
);
HistoryCard.displayName = "HistoryCard";
