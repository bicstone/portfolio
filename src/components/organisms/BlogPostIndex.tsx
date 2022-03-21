import React from 'react';

import { Typography, CardActionArea, Card, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { Update as UpdateIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';

import { BlogPageQuery } from 'src/types';

export type BlogPostIndexProps = {
  posts: BlogPageQuery['posts']['group'];
};

/**
 * ブログ記事一覧
 * カテゴリー別に表示する
 */
export const BlogPostIndex: React.FC<BlogPostIndexProps> = ({ posts }) => {
  const { t } = useTranslation();
  return (
    <>
      {posts.map(({ edges }) => {
        const categoryName = edges[0].node.category.name || t('common.no-category');

        return (
          <section css={theme => ({ margin: theme.spacing(4, 0) })} key={categoryName}>
            <Typography component="h2" variant="h5" paragraph>
              {categoryName}
            </Typography>
            {edges.map(({ node }) => (
              <article css={theme => ({ margin: theme.spacing(1, 0) })} key={node.id}>
                <Card>
                  <CardActionArea
                    component={RouterLink}
                    to={`/${node.slug}`}
                    title={node?.title || ''}
                    css={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}
                  >
                    <CardMedia>
                      {node?.thumbnail?.localFile?.childImageSharp?.gatsbyImageData && (
                        <GatsbyImage
                          css={theme => ({
                            width: theme.spacing(15),
                            height: theme.spacing(15),
                            margin: theme.spacing(2),
                            objectFit: 'cover',
                          })}
                          image={node.thumbnail.localFile.childImageSharp.gatsbyImageData}
                          alt={node.thumbnail.title || ''}
                        />
                      )}
                    </CardMedia>
                    <div
                      css={theme => ({
                        display: 'flex',
                        flexDirection: 'column',
                        margin: theme.spacing(2),
                      })}
                    >
                      <Typography component="h3" variant="h6">
                        {node.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {node.excerpt}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="div"
                        css={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }}
                      >
                        {node.updated && (
                          <>
                            <UpdateIcon
                              fontSize="inherit"
                              css={theme => ({ marginRight: theme.spacing(0.5) })}
                            />
                            <time
                              dateTime={node.updated}
                              css={theme => ({ marginRight: theme.spacing(1) })}
                            >
                              {node.updatedDate}
                            </time>
                          </>
                        )}
                        {node.created && (
                          <>
                            <AccessTimeIcon
                              fontSize="inherit"
                              css={theme => ({ marginRight: theme.spacing(0.5) })}
                            />
                            <time dateTime={node.created}>{node.createdDate}</time>
                          </>
                        )}
                      </Typography>
                    </div>
                  </CardActionArea>
                </Card>
              </article>
            ))}
          </section>
        );
      })}
    </>
  );
};
