import React from 'react';

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
                masshiro.me
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
              Takanori Oishi
            </Typography>
          )}
          <div className={classes.spacer} />
          <nav>
            <ExternalButton size="small" href="https://masshiro.blog/" className={classes.link}>
              Blog
            </ExternalButton>
            <Tooltip arrow title="お問い合わせ">
              <IconButton size="small" to="/contact" className={classes.link}>
                <EmailIcon />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="Twitter">
              <ExternalIconButton
                size="small"
                href="https://twitter.com/masshiro_me"
                target="_blank"
                rel="external"
                className={classes.link}
              >
                <TwitterIcon />
              </ExternalIconButton>
            </Tooltip>
            <Tooltip arrow title="GitHub">
              <ExternalIconButton
                size="small"
                href="https://github.com/bicstone"
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
