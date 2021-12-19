import React from 'react';

import { Typography, Grid, Button, styled, keyframes } from '@mui/material';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';

import { SvgIcon, AvatarCard } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type HelloGroupProps = {
  links: IndexPageQuery['links']['edges'];
  icon: string;
};

/**
 * 自己紹介
 * 顔写真、自己紹介と連絡先のリンク集がある
 */
export const HelloGroup: React.FC<HelloGroupProps> = ({ links, icon }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const [activeAnimation, setActiveAnimation] = React.useState<boolean>(false);

  const FukkiretaAnimationSvgIcon = styled(SvgIcon)({
    cursor: 'pointer',
    ...(activeAnimation && {
      transformOrigin: 'center bottom',
      animationName: keyframes`
        0%, 100% { transform: rotate(10deg) }
        50% { transform: rotate(-10deg) }
      `,
      animationDuration: '1s',
      animationDelay: '-0.25s',
      animationTimingFunction: 'cubic-bezier(0.4, 0.0, 0.7, 1.0)',
      animationIterationCount: 'infinite',
    }),
  });

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} css={{ textAlign: 'center' }}>
        <FukkiretaAnimationSvgIcon
          width={100}
          height={100}
          icon={icon}
          alt={activeAnimation ? t('hello.icon.fukkireta') : t('hello.icon.normal')}
          wrapProps={{ onClick: () => setActiveAnimation(!activeAnimation) }}
        />
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
