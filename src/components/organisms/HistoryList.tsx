import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@mui/lab';
import { AvatarCard, SvgAvatar } from 'src/components';
import { ContentfulHistory, ContentfulIcon, ContentfulIconSvgTextNode, Maybe } from 'src/types';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: 0,
  },
  timeline: {
    padding: 0,
  },
  timelineSeparator: {
    flex: `0 0 ${theme.spacing(8)}`,
    marginTop: theme.spacing(1),
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap',
  },
  timelineOppositeContent: {
    display: 'none',
  },
}));

export type HistoryListProps = {
  histories: Array<{
    node: Pick<ContentfulHistory, 'node_locale' | 'id' | 'date' | 'name' | 'subName'> & {
      icon: Maybe<
        Pick<ContentfulIcon, 'name'> & {
          svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>>;
        }
      >;
    };
  }>;
};

/**
 * 経歴
 */
export const HistoryList: React.FC<HistoryListProps> = ({ histories }) => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const yearToAge = (year: number): number => React.useMemo(() => year - 1996, [year]);

  return (
    <Grid container>
      <Timeline className={classes.timeline}>
        {histories.map(
          ({ node }, index, { length }) =>
            node.node_locale === language && (
              <TimelineItem key={node.id}>
                <TimelineOppositeContent
                  className={classes.timelineOppositeContent}
                ></TimelineOppositeContent>
                <TimelineSeparator className={classes.timelineSeparator}>
                  <Typography variant="body2" color="textSecondary">
                    {t('histories.date', { date: node.date })}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {t('histories.age', { age: `${yearToAge(Number(node.date))}` })}
                  </Typography>
                  {index < length - 2 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <AvatarCard
                    avatar={
                      <SvgAvatar name={node?.icon?.name || ''} svg={node?.icon?.svg?.svg || ''} />
                    }
                    title={
                      <Typography component="h2" variant="h6">
                        {node.name}
                      </Typography>
                    }
                    disableTypography
                  />
                </TimelineContent>
              </TimelineItem>
            ),
        )}
      </Timeline>
    </Grid>
  );
};
