import React from 'react';
import Cookies from 'js-cookie';
import { Link } from 'gatsby-theme-material-ui';
import { useI18next, Trans } from 'gatsby-plugin-react-i18next';
import { Snackbar, SnackbarContent, Typography, IconButton, makeStyles } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import CloseIcon from '@material-ui/icons/Close';
import { useBreakPoint } from '../../hooks';
import { InlineBlock } from '../';

type Props = {
  show?: boolean;
  cookieName?: string;
  cookieValue?: string;
  cookieOptions?: Cookies.CookieAttributes;
};

const useStyles = makeStyles(theme => ({
  snackbar: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    wordBreak: 'keep-all',
    whiteSpace: 'nowrap',
  },
  iconButton: {
    padding: theme.spacing(1),
  },
}));

export const CookieAlert: React.FC<Props> = ({
  cookieName = 'cookie-licence',
  cookieValue = '1',
  cookieOptions = {
    expires: 790,
    secure: process.env.NODE_ENV !== 'development',
    sameSite: 'Strict',
  },
  show = true,
}) => {
  const classes = useStyles();
  const { t } = useI18next();
  const width = useBreakPoint();
  const MESSAGE_SMALL_WIDTH: Breakpoint[] = ['xs'];
  const [agree, setAgree] = React.useState(Cookies.get(cookieName));

  const handleClose = () => {
    Cookies.set(cookieName, cookieValue, cookieOptions);
    setAgree(cookieValue);
  };

  return (
    <Snackbar open={show && agree === undefined}>
      <SnackbarContent
        className={classes.snackbar}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.iconButton}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>
        }
        message={
          <Typography
            variant={MESSAGE_SMALL_WIDTH.includes(width) ? 'caption' : 'body2'}
            component="div"
          >
            <InlineBlock>{t('cookie-alert.title')}</InlineBlock>
            <wbr />
            <InlineBlock>
              <Trans i18nKey="cookie-alert.description">
                詳しくは
                <Link to="/privacy">Cookieポリシー</Link>
                をご覧ください。
              </Trans>
            </InlineBlock>
          </Typography>
        }
      />
    </Snackbar>
  );
};
