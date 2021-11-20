import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, CardActionArea, Theme } from '@mui/material';
import { ContentfulContact, Maybe, ContentfulIconSvgTextNode } from 'src/types';
import { MediaCard, SvgAvatar } from 'src/components';

export type ContactsListProps = {
  contacts: Array<{
    node: Pick<ContentfulContact, 'id' | 'node_locale' | 'name' | 'subName' | 'href'> & {
      icon: Maybe<{
        svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>>;
      }>;
    };
  }>;
};

export type ContactsIconProps = {
  iconSvgLight?: string;
  iconSvgDark?: string;
  alt?: string;
};

/**
 * 連絡先一覧
 */
export const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  const { language } = useI18next();
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {contacts.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
              <CardActionArea
                title={node.name || ''}
                href={node.href || ''}
                rel="external noreferrer noopener nofollow"
                target="_blank"
              >
                <MediaCard
                  media={
                    <SvgAvatar
                      sx={{
                        mt: 2,
                        mb: 0,
                        mx: 'auto',
                        width: (theme: Theme) => theme.spacing(5),
                        height: (theme: Theme) => theme.spacing(5),
                      }}
                      svg={node.icon?.svg?.svg || ''}
                      name={node.name || ''}
                    />
                  }
                  title={
                    <Typography component="h2" variant="h6" align="center">
                      {node.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body1" color="textSecondary" align="center">
                      {node.subName}
                    </Typography>
                  }
                  disableTypography
                />
              </CardActionArea>
            </Grid>
          ),
      )}
    </Grid>
  );
};
