import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Typography, Grid, CardActionArea } from '@material-ui/core';
import {
  ContentfulAssetFile,
  ContentfulContact,
  ImageSharp,
  InlineSvg,
  Maybe,
  Scalars,
} from 'src/types';
import { MediaCard, SvgIcon } from 'src/components';
import { useDarkMode } from 'src/hooks';

export type ContactsListProps = {
  contacts: Array<{
    node: Pick<ContentfulContact, 'id' | 'node_locale' | 'name' | 'subName' | 'href'> & {
      iconSvgLight: Maybe<{ svg: Maybe<Pick<InlineSvg, 'content'>> }>;
      iconSvgDark: Maybe<{ svg: Maybe<Pick<InlineSvg, 'content'>> }>;
      iconRasterLight: Maybe<{
        file: Maybe<Pick<ContentfulAssetFile, 'url'>>;
        localFile: Maybe<{ childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>;
      }>;
      iconRasterDark: Maybe<{
        file: Maybe<Pick<ContentfulAssetFile, 'url'>>;
        localFile: Maybe<{ childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>;
      }>;
    };
  }>;
};

export type ContactsIconProps = {
  iconSvgLight?: string;
  iconSvgDark?: string;
  iconRasterLight?: Scalars['JSON'];
  iconRasterDark?: Scalars['JSON'];
  alt?: string;
};

const useStyles = makeStyles(theme => ({
  icon: {
    display: 'block',
    margin: theme.spacing(2, 'auto', 0, 'auto'),
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

/**
 * アイコン部
 */
const ContactsIcon: React.FC<ContactsIconProps> = ({
  iconSvgLight,
  iconSvgDark,
  iconRasterLight,
  iconRasterDark,
  alt = '',
}) => {
  const classes = useStyles();
  const [darkMode] = useDarkMode();
  if (!darkMode && iconSvgLight) {
    return (
      <SvgIcon width={40} height={40} icon={iconSvgLight} alt={alt} className={classes.icon} />
    );
  }
  if (darkMode && iconSvgDark) {
    return (
      <div>
        <SvgIcon width={40} height={40} icon={iconSvgDark} alt={alt} className={classes.icon} />
      </div>
    );
  }
  if (!darkMode && iconRasterLight) {
    return <GatsbyImage image={iconRasterLight} alt={alt} className={classes.icon} />;
  }
  if (darkMode && iconRasterDark) {
    return <GatsbyImage image={iconRasterDark} alt={alt} className={classes.icon} />;
  }
  return null;
};

/**
 * 連絡先一覧
 *
 * 注意
 * ソーシャルアイコンガイドラインを確認
 * - ライトテーマは、すべて指定ブランドカラーを使用
 * - ダークテーマは、全ブランドで白色がOKなので白色を使用
 * - アイコン 8*5=40px
 * - スペース 8*(5+2+2)=72px (アイコン幅比 180%)
 */
export const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  const { language } = useI18next();
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
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
                    <ContactsIcon
                      iconSvgLight={node.iconSvgLight?.svg?.content || ''}
                      iconSvgDark={node.iconSvgDark?.svg?.content || ''}
                      iconRasterLight={
                        node.iconRasterLight?.localFile?.childImageSharp?.gatsbyImageData
                      }
                      iconRasterDark={
                        node.iconRasterDark?.localFile?.childImageSharp?.gatsbyImageData
                      }
                      alt={node.name || ''}
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
