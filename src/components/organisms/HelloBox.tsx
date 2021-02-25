import React from 'react';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, Button, Box } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { SvgIcon } from 'src/components';
import { useBreakPoint } from 'src/hooks';
import { ContentfulHello } from 'src/types';

export type HelloBoxFields = 'node_locale' | 'id' | 'name' | 'href';

export type HelloBoxProps = {
  links: Array<{ node: Pick<ContentfulHello, HelloBoxFields> }>;
  icon: string;
  iconAlt: string;
};

/**
 * 自己紹介Box
 * 顔写真、自己紹介と連作先のリンク集がある
 */
export const HelloBox: React.FC<HelloBoxProps> = ({ links, icon, iconAlt }) => {
  const { t } = useTranslation();
  const { language } = useI18next();
  const width = useBreakPoint();
  const BUTTON_SMALL_WIDTH: Breakpoint[] = ['xs'];

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item>
        <SvgIcon width={100} height={100} icon={icon} alt={iconAlt} />
      </Grid>
      <Grid item xs={11} sm={10}>
        <Typography component="span" variant="h6">
          {t('hello.title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('hello.description')}
        </Typography>
        {links.map(
          ({ node }) =>
            node.node_locale === language && (
              <Box display="inline" marginRight={1}>
                <Button
                  href={node.href || ''}
                  variant="outlined"
                  color="secondary"
                  size={BUTTON_SMALL_WIDTH.includes(width) ? 'small' : 'medium'}
                  rel="external noreferrer noopener nofollow"
                  key={node.id}
                >
                  {node.name}
                </Button>
              </Box>
            ),
        )}
      </Grid>
    </Grid>
  );
};
