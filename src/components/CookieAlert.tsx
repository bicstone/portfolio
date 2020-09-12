import React from 'react';
import Cookies from 'js-cookie';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { Snackbar, Button, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

interface Props {
  cookieName?: string;
  cookieTrue?: string;
  cookieFalse?: string;
  cookieOptions?: Cookies.CookieAttributes;
}

const CookieAlert: React.FC<Props> = ({
  cookieName = 'gatsby-gdpr-google-analytics',
  cookieTrue = 'true',
  cookieFalse = 'false',
  cookieOptions = {
    expires: 790,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'Strict',
  },
}) => {
  const { t } = useI18next();
  const [agree, setAgree] = React.useState(Cookies.get(cookieName));

  const agreeAction = () => {
    Cookies.set(cookieName, cookieTrue, cookieOptions);
    setAgree(cookieTrue);
  };

  const closeAction = () => {
    Cookies.set(cookieName, cookieFalse, cookieOptions);
    setAgree(cookieFalse);
  };

  const agreeButton = (
    <>
      <Button color="secondary" size="small" onClick={closeAction}>
        {t('cookie-alert.dicline')}
      </Button>
      <Button color="primary" onClick={agreeAction}>
        {t('cookie-alert.accept')}
      </Button>
    </>
  );

  return (
    <Snackbar
      open={agree === undefined}
      action={agreeButton}
      message={<Typography>{t('cookie-alert.description')}</Typography>}
    />
  );
};

export default CookieAlert;
