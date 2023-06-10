import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { memo, useId } from "react";

import type { PortfolioHistoryCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioHistoryCard on HistoriesYaml {
    id
    title
    date
    excerpt
    icon
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
    const id = useId();
    const date = formatDateTime(history.date, "yyyy/MM");

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
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <CardHeader
            css={{ padding: 0 }}
            avatar={<SvgAvatar aria-hidden="true" svg={history.icon} />}
            title={
              <>
                <Typography
                  variant="body2"
                  component="div"
                  color="textSecondary"
                >
                  {date}
                </Typography>
                <Typography component="h2" variant="h6">
                  {history.title}
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
            {history.excerpt}
          </Typography>
        </AccordionDetails>
      </Accordion>
    );
  }
);
HistoryCard.displayName = "HistoryCard";
