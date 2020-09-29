import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Typography,
  Grid,
  Container,
  Avatar,
  CardHeader,
  CardContent,
  Card,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import DevicesIcon from '@material-ui/icons/Devices';
import CodeIcon from '@material-ui/icons/Code';
import SecurityIcon from '@material-ui/icons/Security';
import MemoryIcon from '@material-ui/icons/Memory';
import WidgetsIcon from '@material-ui/icons/Widgets';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingTop: 0,
  },
}));

const WhatIDo: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18next();

  const whatIDoList = [
    {
      title: t('what-i-do.frontend-title'),
      message: t('what-i-do.frontend-message'),
      icon: <DevicesIcon />,
      tags: t('what-i-do.frontend-tags'),
    },
    {
      title: t('what-i-do.backend-title'),
      message: t('what-i-do.backend-message'),
      icon: <CodeIcon />,
      tags: t('what-i-do.backend-tags'),
    },
    {
      title: t('what-i-do.devops-title'),
      message: t('what-i-do.devops-message'),
      icon: <AllInclusiveIcon />,
      tags: t('what-i-do.devops-tags'),
    },
    {
      title: t('what-i-do.security-title'),
      message: t('what-i-do.security-message'),
      icon: <SecurityIcon />,
      tags: t('what-i-do.security-tags'),
    },
    {
      title: t('what-i-do.iot-title'),
      message: t('what-i-do.iot-message'),
      icon: <MemoryIcon />,
      tags: t('what-i-do.iot-tags'),
    },
    {
      title: t('what-i-do.mechanical-title'),
      message: t('what-i-do.mechanical-message'),
      icon: <WidgetsIcon />,
      tags: t('what-i-do.mechanical-tags'),
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('what-i-do.title')}
      </Typography>
      <Grid container spacing={2} className={classes.mainGrid}>
        {whatIDoList.map((whatIDo, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardHeader
                avatar={<Avatar>{whatIDo.icon}</Avatar>}
                title={
                  <Typography component="h3" variant="h6">
                    {whatIDo.title}
                  </Typography>
                }
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="body1">{whatIDo.message}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WhatIDo;
