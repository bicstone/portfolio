import React from 'react';
import { Link as RouterLink } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Toolbar, AppBar, Typography, useScrollTrigger, Box, useTheme, Link } from '@mui/material';
import { SvgIcon } from 'src/components';

export type HeaderProps = {
  icon: string;
  iconAlt: string;
  isHome: boolean;
};

/**
 * ヘッダー部
 */
export const Header: React.FC<HeaderProps> = ({ icon, iconAlt, isHome }) => {
  const theme = useTheme();
  const { t } = useI18next();
  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <AppBar
      position="fixed"
      color={scrollTrigger ? 'inherit' : 'transparent'}
      elevation={scrollTrigger ? 4 : 0}
      role="banner"
    >
      <Toolbar variant="dense" css={{ flexWrap: 'wrap' }}>
        {isHome ? (
          <Box display="flex" alignItems="center">
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              css={{ margin: theme.spacing(0, 0.5) }}
              gutterBottom
            >
              <Link component={RouterLink} to="/" title={t('header.back-to-home')}>
                {t('header.title-home')}
              </Link>
            </Typography>
          </Box>
        ) : (
          <Link component={RouterLink} to="/" title={t('header.back-to-home')}>
            <Box display="flex" alignItems="center">
              <SvgIcon
                width={20}
                height={20}
                icon={icon}
                alt={iconAlt}
                css={{ marginRight: theme.spacing(0.5) }}
              />
              <Typography
                color="textPrimary"
                variant="h6"
                component="span"
                css={{ margin: theme.spacing(0, 0.5) }}
                gutterBottom
              >
                {t('header.title-home')}
              </Typography>
            </Box>
          </Link>
        )}
        <div css={{ flexGrow: 1 }} />
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
