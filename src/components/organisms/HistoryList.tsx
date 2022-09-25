import { Card, CardHeader, Divider, Typography } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Fragment } from "react";
import { SvgAvatar } from "src/components";

import type { IndexPageQuery } from "@/generated/graphqlTypes";

export interface HistoryListProps {
  histories: IndexPageQuery["histories"]["edges"];
}

/**
 * 経歴
 */
export const HistoryList = ({ histories }: HistoryListProps): JSX.Element => {
  const { t, language } = useI18next();

  return (
    <Card>
      {histories
        .filter(({ node }) => node.node_locale === language)
        .map(({ node }, index, { length }) => (
          <Fragment key={node.id}>
            <CardHeader
              avatar={
                <SvgAvatar name={node.icon.name} svg={node.icon.svg.svg} />
              }
              title={
                <>
                  <Typography
                    variant="body2"
                    component="div"
                    color="textSecondary"
                  >
                    {t("histories.date", { date: node.date })}
                  </Typography>
                  <Typography component="h2" variant="h6">
                    {node.name}
                  </Typography>
                </>
              }
              subheader={
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {node.subName}
                </Typography>
              }
              disableTypography
            />
            {/* 1 px to be consistent with the accordion. */}
            {index < length - 1 && <Divider css={{ borderBottomWidth: 1 }} />}
          </Fragment>
        ))}
    </Card>
  );
};
