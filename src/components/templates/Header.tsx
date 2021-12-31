import React from 'react';

import {
  Toolbar,
  AppBar,
  Typography,
  useScrollTrigger,
  Link,
  Button,
  Breakpoint,
} from '@mui/material';
import { Link as RouterLink } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { GitHub as GitHubIcon } from '@mui/icons-material';

import { SvgIcon } from 'src/components';
import { useBreakPoint, useSiteMetadata } from 'src/hooks';

export type HeaderProps = {
  icon: string;
  iconAlt: string;
  isHome: boolean;
};

/**
 * ヘッダー部
 */
export const Header: React.FC<HeaderProps> = ({ icon, iconAlt, isHome }) => {
  const { t } = useI18next();
  const siteMetaData = useSiteMetadata();
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const siteMetaData = useSiteMetadata();
  const width = useBreakPoint();
  const expandedBreakpoints: Breakpoint[] = ['xl', 'lg', 'md'];
  const isExpanded = expandedBreakpoints.includes(width);

  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? 'inherit' : 'transparent'}
      elevation={scrollTrigger ? 4 : 0}
      role="banner"
    >
      <Toolbar variant="dense" css={{ flexWrap: 'wrap' }}>
        {isHome ? (
          <div css={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              css={theme => ({ margin: theme.spacing(0, 0.5) })}
              gutterBottom
            >
              <Link component={RouterLink} to="/" title={t('header.back-to-home')}>
                {t('header.title-home')}
              </Link>
            </Typography>
          </div>
        ) : (
          <Link component={RouterLink} to="/" title={t('header.back-to-home')}>
            <div css={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon
                width={20}
                height={20}
                icon={icon}
                alt={iconAlt}
                css={theme => ({ marginRight: theme.spacing(0.5) })}
              />
              <Typography
                color="textPrimary"
                variant="h6"
                component="span"
                css={theme => ({ margin: theme.spacing(0, 0.5) })}
                gutterBottom
              >
                {t('header.title-home')}
              </Typography>
            </div>
          </Link>
        )}
        <div css={{ flexGrow: 1 }} />
        <nav>
          <Button
            css={theme => ({
              backgroundColor: theme.palette.background.default,
              marginRight: theme.spacing(0.5),
            })}
            variant="outlined"
            color="inherit"
            size="small"
            href={`https://github.com/${siteMetaData.github}`}
            title={t('header.github-title')}
            startIcon={isExpanded ? <GitHubIcon /> : null}
            rel="external noreferrer noopener nofollow"
            target="_blank"
          >
            {isExpanded ? t('header.github-title') : <GitHubIcon />}
          </Button>
        </nav>
        {/*
        FIXME: #264 で対応するまで一時的に無効にする
        <nav>
          <IconButton
            size="small"
            onClick={toggleDarkMode}
            css={{ marginRight: theme.spacing(0.5) }}
            title={t('header.toggleDarkTheme-title')}
          >
            {darkMode ? <Brightness2 /> : <WbSunny />}
          </IconButton>
        </nav>
        */}
      </Toolbar>
    </AppBar>
  );
};
