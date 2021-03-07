import React from 'react';
import { PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Button } from 'gatsby-theme-material-ui';
import { makeStyles, Box, Grid, Typography } from '@material-ui/core';
import { LocalHotel as LocalHotelIcon } from '@material-ui/icons';
import { Layout } from '../components';

const useStyles = makeStyles(theme => ({
  icon: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

const NotFound: React.FC<PageProps> = () => {
  const classes = useStyles();
  const { t } = useI18next();
  return (
    <Layout>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box textAlign="center">
          <LocalHotelIcon className={classes.icon} />
          <Typography variant="h4" component="h1" paragraph>
            {t('not-found.title')}
          </Typography>
          <Typography variant="body1">{t('not-found.description')}</Typography>
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
