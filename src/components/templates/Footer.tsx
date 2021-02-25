import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby-theme-material-ui';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(3),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const nowDate = new Date();
  return (
    <footer className={classes.footer} role="contentinfo">
      <Typography variant="body2" color="textSecondary" align="center" paragraph>
        <Link color="inherit" to="/privacy">
          {t('privacy.title')}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" paragraph>
        {t('footer.copyright', { year: nowDate.getFullYear() })}
      </Typography>
    </footer>
  );
};
