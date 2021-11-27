import React from 'react';

import { Link as RouterLink } from 'gatsby';

import { Typography, Link } from '@mui/material';
import { useI18next } from 'gatsby-plugin-react-i18next';

/**
 * フッター部
 */
export const Footer: React.FC = () => {
  const { t } = useI18next();
  const nowDate = new Date();
  return (
    <footer
      css={theme => ({
        marginTop: 'auto',
        padding: theme.spacing(3),
        borderTop: `1px solid ${theme.palette.divider}`,
      })}
      role="contentinfo"
    >
      <Typography variant="body2" color="textSecondary" align="center" paragraph>
        <Link component={RouterLink} color="inherit" to="/privacy">
          {t('privacy.title')}
        </Link>
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        {t('footer.copyright', { year: nowDate.getFullYear() })}
      </Typography>
    </footer>
  );
};
