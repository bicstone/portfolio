import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  AppBar,
  Typography,
  Button as ExternalButton,
  IconButton as ExternalIconButton,
  Tooltip,
} from '@material-ui/core';
import { Link, IconButton } from 'gatsby-theme-material-ui';

interface props {
  isHome?: boolean;
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexWrap: 'wrap',
  },
  spacer: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(0, 0.5),
  },
}));

const Header: React.FC<props> = ({ isHome = false }) => {
  const classes = useStyles();
  const { t, language, languages, changeLanguage } = useI18next();
  const nextLanguage = languages.filter(lang => lang !== language)[0];

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar variant="dense" className={classes.toolbar}>
          {!isHome ? (
            <Link to="/">
              <Typography
                color="textPrimary"
                variant="h6"
                component="h1"
                className={classes.link}
                gutterBottom
              >
                {t('header.title-home')}
              </Typography>
            </Link>
          ) : (
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              className={classes.link}
              gutterBottom
            >
              {t('header.title')}
            </Typography>
          )}
          <Tooltip arrow title={t('header.changeLanguage-title') as string}>
            <IconButton
              size="small"
              onClick={e => {
                e.preventDefault();
                changeLanguage(nextLanguage);
              }}
              className={classes.link}
            >
              {language.toUpperCase()}
            </IconButton>
          </Tooltip>
          <div className={classes.spacer} />
          <nav>
            <ExternalButton
              size="small"
              title={t('header.blog-title') as string}
              href={t('header.blog-url') as string}
              className={classes.link}
            >
              {t('header.blog-title')}
            </ExternalButton>
            <Tooltip arrow title={t('header.contact-title') as string}>
              <IconButton size="small" to="/contact" className={classes.link}>
                <EmailIcon />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title={t('header.twitter-title') as string}>
              <ExternalIconButton
                size="small"
                href={t('header.twitter-url') as string}
                target="_blank"
                rel="external"
                className={classes.link}
              >
                <TwitterIcon />
              </ExternalIconButton>
            </Tooltip>
            <Tooltip arrow title={t('header.github-title') as string}>
              <ExternalIconButton
                size="small"
                href={t('header.github-url') as string}
                target="_blank"
                rel="external"
                className={classes.link}
              >
                <GitHubIcon />
              </ExternalIconButton>
            </Tooltip>
          </nav>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
