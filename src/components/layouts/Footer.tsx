import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles, Typography, Grid, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18next();
  const nowDate = new Date();
  return (
    <footer className={classes.footer} role="contentinfo">
      <Container maxWidth="sm">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center" paragraph>
              <Link color="inherit" to="/privacy">
                {t('privacy.title')}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              {t('footer.copyright', { year: nowDate.getFullYear() })}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
