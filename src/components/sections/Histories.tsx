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
} from '@material-ui/lab';
import { HistoryDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: 0,
  },
  timeline: {
    padding: 0,
  },
  timelineSeparator: {
    flex: `0 0 ${theme.spacing(8)}px`,
    marginTop: theme.spacing(1),
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap',
  },
  timelineOppositeContent: {
    display: 'none',
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
              name
              subName
              icon {
                svg {
                  svg
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
                <TimelineOppositeContent
                  className={classes.timelineOppositeContent}
                ></TimelineOppositeContent>
                <TimelineSeparator className={classes.timelineSeparator}>
                  <Typography variant="body2" color="textSecondary">
                    {t('historys.date', { date: node.date })}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {t('historys.age', { age: `${yearToAge(Number(node.date))}` })}
                  </Typography>
                  {index < length - 2 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper>
                    <CardHeader
                      avatar={
                        node?.icon?.svg?.svg && (
                          <Avatar>
                            <SvgIcon>{parse(node.icon.svg.svg)}</SvgIcon>
                          </Avatar>
                        )
                      }
                      title={
                        <Typography component="h3" variant="h6">
                          {node.name}
                        </Typography>
                      }
                      subheader={node.subName}
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
