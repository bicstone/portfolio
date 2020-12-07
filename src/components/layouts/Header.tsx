import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  makeStyles,
  Toolbar,
  AppBar,
  Typography,
  IconButton as ExternalIconButton,
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
  const { t } = useI18next();
  const [darkMode, toggleDarkMode] = useDarkMode();
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? 'inherit' : 'transparent'}
      elevation={scrollTrigger ? 4 : 0}
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        <Link to="/" title={t('header.back-to-home')}>
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
        <IconButton
          size="small"
          onClick={toggleDarkMode}
          className={classes.link}
          title={t('header.toggleDarkTheme-title')}
        >
          {darkMode ? <Brightness2 /> : <WbSunny />}
        </IconButton>
        <div className={classes.spacer} />
        <nav>
          <ExternalIconButton
            size="small"
            href={t('header.github-url') as string}
            rel="external noreferrer noopener nofollow"
            target="_blank"
            className={classes.link}
            title={t('header.github-title')}
            style={{ color: darkMode ? '#fff' : '#171515' }}
          >
            <GitHubIcon />
          </ExternalIconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
