import React from 'react';
import { PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Button } from 'gatsby-theme-material-ui';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import { Layout } from '../components';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const NotFound: React.FC<PageProps> = ({ path }) => {
  const classes = useStyles();
  const { t } = useI18next();
  return (
    <Layout pathname={path}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box textAlign="center">
          <LocalHotelIcon className={classes.icon} />
          <Typography variant="h4" component="h1" paragraph>
            {t('not-found.title')}
          </Typography>
          <Typography variant="body1">{t('not-found.message')}</Typography>
        </Box>
        <Box marginTop={4} textAlign="center">
          <Button variant="contained" to="/">
            {t('not-found.back-to-home')}
          </Button>
        </Box>
      </Grid>
    </Layout>
  );
};

export default NotFound;
