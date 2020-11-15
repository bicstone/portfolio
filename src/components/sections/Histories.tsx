import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  Paper,
  Avatar,
  SvgIcon,
} from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';
import { HistoryDataQuery } from '../../types';

const useStyles = makeStyles(() => ({
  cardContent: {
    paddingTop: 0,
  },
  timeline: {
    padding: 0,
  },
  timelineDot: {
    borderStyle: 'none',
    borderWidth: 0,
  },
  timelineContent: {
    flex: 3,
  },
  timelineOppositeContent: {
    flex: 0,
    minWidth: '6rem',
  },
}));

export const Histories: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const { allContentfulHistory }: HistoryDataQuery = useStaticQuery(
    graphql`
      query HistoryData {
        allContentfulHistory(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              node_locale
              date(formatString: "yyyy")
              title
              subheader
              icon {
                contents {
                  contents
                }
              }
            }
          }
        }
      }
    `,
  );
  const yearToAge = (year: number): number => React.useMemo(() => year - 1996, [year]);

  return (
    <Grid container>
      <Timeline className={classes.timeline}>
        {allContentfulHistory.edges.map(
          ({ node }, index, { length }) =>
            node.node_locale === language && (
              <TimelineItem key={node.id}>
                <TimelineOppositeContent className={classes.timelineOppositeContent}>
                  <Typography variant="body2" color="textSecondary">
                    {t('historys.date', { date: node.date })}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {t('historys.age', { age: `${yearToAge(Number(node.date))}` })}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="inherit" className={classes.timelineDot}>
                    {node?.icon?.contents?.contents && (
                      <Avatar>
                        <SvgIcon>{parse(node.icon.contents.contents)}</SvgIcon>
                      </Avatar>
                    )}
                  </TimelineDot>
                  {/* 線は最後の項目には表示しない */}
                  {index < length - 2 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent className={classes.timelineContent}>
                  <Paper>
                    <CardHeader
                      title={
                        <Typography component="h3" variant="h6">
                          {node.title}
                        </Typography>
                      }
                      subheader={node.subheader}
                    />
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ),
        )}
      </Timeline>
    </Grid>
  );
};
