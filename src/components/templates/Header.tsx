import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Toolbar, AppBar, Typography, useScrollTrigger, Box, styled } from '@mui/material';
import { WbSunny, Brightness2 } from '@mui/icons-material';
import { Link, IconButton } from 'gatsby-theme-material-ui';
import { SvgIcon } from 'src/components';
import { useDarkMode } from 'src/hooks';

export type HeaderProps = {
  icon: string;
  iconAlt: string;
  isHome: boolean;
};

const StyledSvgIcon = styled(SvgIcon)();

/**
 * ヘッダー部
 */
export const Header: React.FC<HeaderProps> = ({ icon, iconAlt, isHome }) => {
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
      <Toolbar variant="dense" css={{ flexWrap: 'wrap' }}>
        {isHome ? (
          <Box display="flex" alignItems="center">
            <Typography
              color="textPrimary"
              variant="h6"
              component="h1"
              sx={{ my: 0, mx: 0.5 }}
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
              <StyledSvgIcon width={20} height={20} icon={icon} alt={iconAlt} sx={{ mr: 0.5 }} />
              <Typography
                color="textPrimary"
                variant="h6"
                component="span"
                sx={{ my: 0, mx: 0.5 }}
                gutterBottom
              >
                {t('header.title-home')}
              </Typography>
            </Box>
          </Link>
        )}
        <div css={{ flexGrow: 1 }} />
        <nav>
          <IconButton
            size="small"
            onClick={toggleDarkMode}
            sx={{ mr: 0.5 }}
            title={t('header.toggleDarkTheme-title')}
          >
            {darkMode ? <Brightness2 /> : <WbSunny />}
          </IconButton>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
