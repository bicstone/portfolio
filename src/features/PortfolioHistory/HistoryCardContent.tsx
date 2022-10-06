import { CardHeader, Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo } from "react";

import type { PortfolioHistoryCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const query = graphql`
  fragment PortfolioHistoryCard on ContentfulHistory {
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

export const HistoryCardContent = (props: {
  history: PortfolioHistoryCardFragment;
}): JSX.Element => {
  const { history } = props;

  const { t } = useI18next();

  const year = useMemo(() => {
    return formatDateTime(history.date, "yyyy");
  }, [history.date]);

  return (
    <>
      {/* 1 px to be consistent with the accordion. */}
      <Divider css={{ borderBottomWidth: 1 }} />
      <CardHeader
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
        subheader={
          <Typography variant="body2" color="text.secondary" component="div">
            {history.subName}
          </Typography>
        }
        disableTypography
      />
    </>
  );
};
