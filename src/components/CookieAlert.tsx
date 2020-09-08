import React from 'react';
import Cookies from 'js-cookie';
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
