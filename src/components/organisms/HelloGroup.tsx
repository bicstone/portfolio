import React from 'react';

import { Typography, Grid, Button } from '@mui/material';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import { SvgIcon, AvatarCard } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type HelloGroupProps = {
  links: IndexPageQuery['links']['edges'];
  icon: string;
  iconAlt: string;
};

/**
 * 自己紹介
 * 顔写真、自己紹介と連絡先のリンク集がある
 */
export const HelloGroup: React.FC<HelloGroupProps> = ({ links, icon, iconAlt }) => {
  const { t } = useTranslation();
  const { language } = useI18next();

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} css={{ textAlign: 'center' }}>
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
                      size="medium"
                      rel="external noreferrer noopener nofollow"
                      css={theme => ({ marginRight: theme.spacing(1) })}
                      key={node.id}
                      target="_blank"
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
