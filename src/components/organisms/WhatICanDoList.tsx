import { Typography, Grid, CardHeader, Card } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import { SvgAvatar } from "src/components";

import type { IndexPageQuery } from "@/generated/graphqlTypes";

export interface WhatICanDoListProps {
  whatICanDos: IndexPageQuery["whatICanDos"]["edges"];
}

/**
 * お手伝いできることリスト
 */
export const WhatICanDoList = ({
  whatICanDos,
}: WhatICanDoListProps): JSX.Element => {
  const { language } = useI18next();
  return (
    <Grid container spacing={2} alignItems="center">
      {whatICanDos
        .filter(({ node }) => node.node_locale === language)
        .map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
            <Card>
              <CardHeader
                avatar={
                  <SvgAvatar name={node.icon.name} svg={node.icon.svg.svg} />
                }
                title={
                  <Typography component="h2" variant="h6">
                    {node.name}
                  </Typography>
                }
                subheader={
                  <Typography variant="body2" color="text.secondary">
                    {node.subName}
                  </Typography>
                }
                disableTypography
              />
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
