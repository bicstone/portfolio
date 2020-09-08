import React from 'react';
import Cookies from 'js-cookie';
import { Snackbar, Button, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const CookieAlert: React.FC = () => {
  const CookieName = 'gatsby-gdpr-google-analytics';
  const CookieTrue = 'true';
  const CookieFalse = 'false';
  const CookieOptions: Cookies.CookieAttributes = {
    expires: 790,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'Strict',
  };
  const [agree, setAgree] = React.useState(Cookies.get(CookieName));

  const agreeAction = () => {
    Cookies.set(CookieName, CookieTrue, CookieOptions);
    setAgree(CookieTrue);
  };

  const closeAction = () => {
    Cookies.set(CookieName, CookieFalse, CookieOptions);
    setAgree(CookieFalse);
  };

  const agreeButton = (
    <>
      <Button color="secondary" size="small" onClick={closeAction}>
        拒否
      </Button>
      <Button color="primary" onClick={agreeAction}>
        OK
      </Button>
    </>
  );

  return (
    <Snackbar
      open={agree === undefined}
      action={agreeButton}
      message={
        <Typography>
          このウェブサイトは機能改善のためにCookieを使用しています。
          <Link to="/privacy">プライバシーポリシー</Link>
        </Typography>
      }
    />
  );
};

export default CookieAlert;
