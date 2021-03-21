import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Typography, Grid, CardActionArea } from '@material-ui/core';
import { ContentfulContact } from 'src/types';
import { MediaCard, SvgAvatar } from 'src/components';

export type ContactsBoxFields = 'node_locale' | 'id' | 'name' | 'subName' | 'href' | 'icon';

export type ContactsBoxProps = {
  contacts: Array<{ node: Pick<ContentfulContact, ContactsBoxFields> }>;
};

const useStyles = makeStyles(theme => ({
  avatarLarge: {
    margin: theme.spacing(2, 'auto', 0, 'auto'),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

/**
 * 連絡先Box
 * 連絡先のリンク集がある
 */
export const ContactsBox: React.FC<ContactsBoxProps> = ({ contacts }) => {
  const classes = useStyles();
  const { language } = useI18next();
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      {contacts.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={4} key={node.id} component="section">
              <CardActionArea
                title={node.name || ''}
                href={node.href || ''}
                rel="external noreferrer noopener nofollow"
                target="_blank"
              >
                <MediaCard
                  media={
                    <SvgAvatar
                      name={node?.icon?.name || ''}
                      svg={node?.icon?.svg?.svg || ''}
                      className={classes.avatarLarge}
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
