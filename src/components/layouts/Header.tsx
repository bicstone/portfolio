import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  AppBar,
  Typography,
  IconButton as ExternalIconButton,
  Tooltip,
  useScrollTrigger,
} from '@material-ui/core';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { Link, IconButton } from 'gatsby-theme-material-ui';
import { useDarkMode } from '../../hooks';

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

export const Header: React.FC = () => {
  const classes = useStyles();
  const { t, language, languages, changeLanguage } = useI18next();
  const nextLanguage = languages.filter(lang => lang !== language)[0];
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <header>
      <AppBar
        position="fixed"
        color={scrollTrigger ? 'inherit' : 'transparent'}
        elevation={scrollTrigger ? 4 : 0}
      >
        <Toolbar variant="dense" className={classes.toolbar}>
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
          <Tooltip arrow title={t('header.toggleDarkTheme-title') as string}>
            <IconButton size="small" onClick={toggleDarkMode} className={classes.link}>
              {isDarkMode ? <Brightness2 /> : <WbSunny />}
            </IconButton>
          </Tooltip>
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
            <Tooltip arrow title={t('header.github-title') as string}>
              <ExternalIconButton
                size="small"
                href={t('header.github-url') as string}
                rel="external noreferrer nofollow"
                target="_blank"
                className={classes.link}
                style={{ color: isDarkMode ? '#fff' : '#171515' }}
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
