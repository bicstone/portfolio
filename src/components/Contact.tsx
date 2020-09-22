import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Typography,
  Grid,
  Container,
  Avatar,
  CardActionArea,
  CardContent,
  Card,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingTop: 0,
  },
  avatarLarge: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18next();

  const contactList = [
    {
      icon: <TwitterIcon />,
      href: t('contact.twitter.href'),
      title: t('contact.twitter.title'),
      subTitle: t('contact.twitter.subTitle'),
    },
    {
      icon: <EmailIcon />,
      href: t('contact.email.href'),
      title: t('contact.email.title'),
      subTitle: t('contact.email.subTitle'),
    },
    {
      icon: <VpnKeyIcon />,
      href: t('contact.key.href'),
      title: t('contact.key.title'),
      subTitle: t('contact.key.subTitle'),
    },
  ];

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('contact.title')}
      </Typography>
      <Grid container spacing={2} justify="center" alignItems="center" className={classes.mainGrid}>
        {contactList.map((contact, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <CardActionArea
              title={contact.title}
              href={contact.href}
              rel="external noreferrer nofollow"
              target="_blank"
            >
              <Card>
                <Avatar className={classes.avatarLarge}>{contact.icon}</Avatar>
                <CardContent className={classes.cardContent}>
                  <Typography component="h3" variant="h6" align="center">
                    {contact.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" align="center">
                    {contact.subTitle}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;
