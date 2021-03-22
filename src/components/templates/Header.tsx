import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Toolbar, AppBar, Typography, useScrollTrigger, Box } from '@material-ui/core';
import { WbSunny, Brightness2 } from '@material-ui/icons';
import { Link, IconButton } from 'gatsby-theme-material-ui';
import { SvgIcon } from 'src/components';
import { useDarkMode } from 'src/hooks';

export type HeaderProps = {
  icon: string;
  iconAlt: string;
  isHome: boolean;
};

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
  icon: {
    marginRight: theme.spacing(0.5),
  },
}));

export const Header: React.FC<HeaderProps> = ({ icon, iconAlt, isHome }) => {
  const classes = useStyles();
  const { t } = useI18next();
  const [darkMode, toggleDarkMode] = useDarkMode();
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? 'inherit' : 'transparent'}
      elevation={scrollTrigger ? 4 : 0}
      role="banner"
    >
      <Toolbar variant="dense" className={classes.toolbar}>
        {isHome ? (
          <Box display="flex" alignItems="center">
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              className={classes.link}
              gutterBottom
            >
              <Link to="/" title={t('header.back-to-home')}>
                {t('header.title-home')}
              </Link>
            </Typography>
          </Box>
        ) : (
          <Link to="/" title={t('header.back-to-home')}>
            <Box display="flex" alignItems="center">
              <SvgIcon width={20} height={20} icon={icon} alt={iconAlt} className={classes.icon} />
              <Typography
                color="textPrimary"
                variant="h6"
                component="span"
                className={classes.link}
                gutterBottom
              >
                {t('header.title-home')}
              </Typography>
            </Box>
          </Link>
        )}
        <div className={classes.spacer} />
        <nav>
          <IconButton
            size="small"
            onClick={toggleDarkMode}
            className={classes.link}
            title={t('header.toggleDarkTheme-title')}
          >
            {darkMode ? <Brightness2 /> : <WbSunny />}
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
