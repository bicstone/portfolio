import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby-theme-material-ui';
import { Box, Theme, Typography } from '@mui/material';

/**
 * フッター部
 */
export const Footer: React.FC = () => {
  const { t } = useI18next();
  const nowDate = new Date();
  return (
    <Box
      sx={{
        mt: 'auto',
        p: 3,
        borderTop: (theme: Theme) => `1px solid ${theme.palette.divider}`,
      }}
      role="contentinfo"
    >
      <Typography variant="body2" color="textSecondary" align="center" paragraph>
        <Link color="inherit" to="/privacy">
          {t('privacy.title')}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {t('footer.copyright', { year: nowDate.getFullYear() })}
      </Typography>
    </Box>
  );
};
