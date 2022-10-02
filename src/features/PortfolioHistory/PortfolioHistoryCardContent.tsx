import { CardHeader, Divider, Typography } from "@mui/material";
import { graphql } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useMemo } from "react";

import type { PortfolioHistoryCardFragment } from "@/generated/graphqlTypes";

import { SvgAvatar } from "@/components/SvgAvatar";
import { formatDateTime } from "@/utils/format";

export const PortfolioHistoryCardQuery = graphql`
  fragment PortfolioHistoryCard on ContentfulHistory {
    node_locale
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

export const PortfolioHistoryCardContent = (props: {
  history: PortfolioHistoryCardFragment;
}): JSX.Element => {
  const { t } = useI18next();
  const year = useMemo(() => {
    return formatDateTime(props.history.date, "yyyy");
  }, [props.history.date]);

  return (
    <>
      {/* 1 px to be consistent with the accordion. */}
      <Divider css={{ borderBottomWidth: 1 }} />
      <CardHeader
        avatar={
          <SvgAvatar
            name={props.history.icon.name}
            svg={props.history.icon.svg.svg}
          />
        }
        title={
          <>
            <Typography variant="body2" component="div" color="textSecondary">
              {t("histories.date", { date: year })}
            </Typography>
            <Typography component="h2" variant="h6">
              {props.history.name}
            </Typography>
          </>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" component="div">
            {props.history.subName}
          </Typography>
        }
        disableTypography
      />
    </>
  );
};
