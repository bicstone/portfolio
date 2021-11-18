import React from 'react';
import Cookies from 'js-cookie';
import { useTranslation, Trans } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby-theme-material-ui';
import { Snackbar, IconButton, Box } from '@mui/material';
import { Breakpoint } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { CookieAlertContent } from 'src/components';

export type CookieAlertProps = {
  show?: boolean;
  cookieName?: string;
  cookieValue?: string;
  cookieOptions?: Cookies.CookieAttributes;
};

/**
 * クッキーアラート
 */
export const CookieAlert: React.FC<CookieAlertProps> = ({
  cookieName = 'cookie-licence',
  cookieValue = '1',
  cookieOptions = {
    expires: 790,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'Strict',
  },
  show = true,
}) => {
  const breakpoints: Breakpoint[] = ['xs'];
  const [agree, setAgree] = React.useState(Cookies.get(cookieName));
  const { t } = useTranslation();

  const handleClose = () => {
    Cookies.set(cookieName, cookieValue, cookieOptions);
    setAgree(cookieValue);
  };

  return (
    <Snackbar open={show && agree === undefined}>
      <CookieAlertContent
        breakpoints={breakpoints}
        action={
          <IconButton
            aria-label="close"
            title="close"
            color="inherit"
            onClick={handleClose}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        }
        message={
          <aside>
            <Box display="inline-block">{t('cookie-alert.title')}</Box>
            <wbr />
            <Box display="inline-block">
              <Trans i18nKey="cookie-alert.description">
                詳しくは
                <Link to="/privacy" color="inherit" underline="always">
                  Cookieポリシー
                </Link>
                をご覧ください。
              </Trans>
            </Box>
          </aside>
        }
      />
    </Snackbar>
  );
};
