import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Box, Typography, Avatar } from '@material-ui/core';
import { AvatarCard } from 'src/components';
import { NotionPageBlog } from 'src/types';

export type BlogPostIndexFields = 'pageId' | 'slug' | 'pageIcon' | 'title' | 'excerpt' | 'tags';

export type BlogPostIndexProps = {
  posts: Array<{ edges: Array<{ node: Pick<NotionPageBlog, BlogPostIndexFields> }> }>;
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
        const tagName = edges[0].node.tags?.[0] || t('common.no-category');

        return (
          <Box component="section" key={tagName} marginY={3}>
            <Typography component="h2" variant="h5" align="center" paragraph>
              {tagName}
            </Typography>
            {edges.map(({ node }) => (
              <Box component="article" key={node.pageId} marginY={1}>
                <AvatarCard
                  avatar={<Avatar>{node.pageIcon}</Avatar>}
                  title={
                    <Typography component="h3" variant="h6">
                      {node.title}
                    </Typography>
                  }
                  subheader={node.excerpt}
                  to={`/${node.slug}`}
                />
              </Box>
            ))}
          </Box>
        );
      })}
    </>
  );
};
