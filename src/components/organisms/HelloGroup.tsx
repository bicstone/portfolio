import React from 'react';
import { Breakpoint } from '@mui/material/styles';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, Button, useTheme } from '@mui/material';
import { IndexPageQuery } from 'src/types';

import { SvgIcon, AvatarCard } from 'src/components';
import { useBreakPoint } from 'src/hooks';

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
  const theme = useTheme();
  const { t } = useTranslation();
  const { language } = useI18next();
  const width = useBreakPoint();
  const BUTTON_SMALL_WIDTH: Breakpoint[] = ['xs'];

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
                      size={BUTTON_SMALL_WIDTH.includes(width) ? 'small' : 'medium'}
                      rel="external noreferrer noopener nofollow"
                      css={{ marginRight: theme.spacing(1) }}
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
