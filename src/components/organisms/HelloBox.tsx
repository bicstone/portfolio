import React from 'react';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { SvgIcon, AvatarCard } from 'src/components';
import { useBreakPoint } from 'src/hooks';
import { ContentfulHello } from 'src/types';

export type HelloBoxFields = 'node_locale' | 'id' | 'name' | 'href';

export type HelloBoxProps = {
  links: Array<{ node: Pick<ContentfulHello, HelloBoxFields> }>;
  icon: string;
  iconAlt: string;
};

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
  icon: {
    textAlign: 'center',
  },
}));

/**
 * 自己紹介Box
 * 顔写真、自己紹介と連絡先のリンク集がある
 */
export const HelloBox: React.FC<HelloBoxProps> = ({ links, icon, iconAlt }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { language } = useI18next();
  const width = useBreakPoint();
  const BUTTON_SMALL_WIDTH: Breakpoint[] = ['xs'];

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} className={classes.icon}>
        <SvgIcon width={100} height={100} icon={icon} alt={iconAlt} />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <AvatarCard
          disableTypography
          title={
            <Typography component="p" variant="h6" gutterBottom>
              {t('hello.title')}
            </Typography>
          }
          subheader={
            <>
              <Typography variant="body1" paragraph>
                {t('hello.description')}
              </Typography>

              {links.map(
                ({ node }) =>
                  node.node_locale === language && (
                    <Button
                      href={node.href || ''}
                      variant="outlined"
                      color="secondary"
                      size={BUTTON_SMALL_WIDTH.includes(width) ? 'small' : 'medium'}
                      rel="external noreferrer noopener nofollow"
                      className={classes.button}
                      key={node.id}
                    >
                      {node.name}
                    </Button>
                  ),
              )}
            </>
          }
        />
      </Grid>
    </Grid>
  );
};
