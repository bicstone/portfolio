import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'gatsby-theme-material-ui';
import { useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { Snackbar, Typography, Button } from '@material-ui/core';
import { InlineBlock } from '../';

type Props = {
  cookieName?: string;
  cookieValue?: string;
  cookieOptions?: Cookies.CookieAttributes;
};

export const CookieAlert: React.FC<Props> = ({
  cookieName = 'cookie-licence',
  cookieValue = '1',
  cookieOptions = {
    expires: 790,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'Strict',
  },
}) => {
  const { t } = useI18next();
  const [agree, setAgree] = React.useState(Cookies.get(cookieName));

  const handleClose = () => {
    Cookies.set(cookieName, cookieValue, cookieOptions);
    setAgree(cookieValue);
  };

  return (
    <Snackbar
      open={agree === undefined}
      action={
        <>
          <Button aria-label="close" color="primary" onClick={handleClose}>
            {t('cookie-alert.close')}
          </Button>
        </>
      }
      message={
        <Typography variant="body2">
          <InlineBlock>{t('cookie-alert.title')}</InlineBlock>
          <wbr />
          <InlineBlock>
            <Trans i18nKey="cookie-alert.description">
              詳しくは
              <Link color="secondary" to="/privacy">
                Cookieポリシー
              </Link>
              をご覧ください。
            </Trans>
          </InlineBlock>
        </Typography>
      }
    />
  );
};
