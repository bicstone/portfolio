import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Typography,
  Grid,
  Container,
  CardHeader,
  Paper,
  Avatar,
  SvgIcon,
} from '@material-ui/core/';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';
import { HistoriesDataQuery } from '../types/graphqlTypes';

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

const historys: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const { allContentfulHistorys }: HistoriesDataQuery = useStaticQuery(
    graphql`
      query HistoriesData {
        allContentfulHistorys(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              node_locale
              date(formatString: "yyyy")
              title
              subheader
              image {
                image
              }
            }
          }
        }
      }
    `,
  );
  const yearToAge = (year: number): number => React.useMemo(() => year - 1996, [year]);

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('historys.title')}
      </Typography>
      <Grid container>
        <Timeline className={classes.timeline}>
          {allContentfulHistorys.edges.map(
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
                      {node.image?.image && (
                        <Avatar>
                          <SvgIcon>{parse(node.image.image)}</SvgIcon>
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
    </Container>
  );
};

export default historys;
