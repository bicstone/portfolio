import React from 'react';

import { Typography, Avatar, CardActionArea } from '@mui/material';
import { Link as RouterLink } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

import { AvatarCard } from 'src/components';
import {
  ContentfulBlogPost,
  ContentfulBlogPostContentTextNode,
  ContentfulTag,
  Maybe,
} from 'src/types';

export type BlogPostIndexProps = {
  posts: Array<{
    edges: Array<{
      node: Pick<
        ContentfulBlogPost,
        'id' | 'title' | 'slug' | 'created' | 'updated' | 'excerpt'
      > & {
        content: Maybe<Pick<ContentfulBlogPostContentTextNode, 'content'>>;
        tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>;
      };
    }>;
  }>;
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
        // タグ名の1つ目をカテゴリーと設定する
        const tagName = edges[0].node?.tags?.[0]?.name || t('common.no-category');

        return (
          <section css={theme => ({ margin: theme.spacing(3, 0) })} key={tagName}>
            <Typography component="h2" variant="h5" align="center" paragraph>
              {tagName}
            </Typography>
            {edges.map(({ node }) => (
              <article css={theme => ({ margin: theme.spacing(1, 0) })} key={node.id}>
                <CardActionArea
                  component={RouterLink}
                  to={`/${node.slug}`}
                  title={node?.title || ''}
                >
                  <AvatarCard
                    avatar={<Avatar />}
                    title={
                      <Typography component="h3" variant="h6">
                        {node.title}
                      </Typography>
                    }
                    subheader={node.excerpt}
                  />
                </CardActionArea>
              </article>
            ))}
          </section>
        );
      })}
    </>
  );
};
