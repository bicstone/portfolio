import React from 'react';

import { Typography, CardActionArea, Card, CardMedia, Breakpoint } from '@mui/material';
import { Link as RouterLink } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { Update as UpdateIcon, AccessTime as AccessTimeIcon } from '@mui/icons-material';

import { AvatarCardAd } from 'src/components';
import { useBreakPoint } from 'src/hooks';
import { BlogPageQuery } from 'src/types';

export type BlogPostIndexProps = {
  posts: BlogPageQuery['posts']['group'];
  adsensePubId: string;
  adsenseInfeedMobileAdId: string;
  adsenseInfeedMobileAdLayoutKey: string;
  adsenseInfeedDesktopAdId: string;
  adsenseInfeedDesktopAdLayoutKey: string;
};

/**
 * ブログ記事一覧
 * カテゴリー別に表示する
 */
export const BlogPostIndex: React.FC<BlogPostIndexProps> = ({
  posts,
  adsensePubId,
  adsenseInfeedMobileAdId,
  adsenseInfeedMobileAdLayoutKey,
  adsenseInfeedDesktopAdId,
  adsenseInfeedDesktopAdLayoutKey,
}) => {
  const breakpoints: Breakpoint[] = ['xs', 'sm'];
  const width = useBreakPoint();
  return (
    <>
      {posts.map(({ edges }) => {
        const categoryName = edges[0].node.category.name;

        return (
          <section css={theme => ({ margin: theme.spacing(4, 0) })} key={categoryName}>
            <Typography component="h2" variant="h5" paragraph>
              {categoryName}
            </Typography>
            {edges.map(({ node }, index) => (
              <>
                {(index === 3 || (index !== 0 && index % 10 === 0)) && (
                  <aside>
                    <AvatarCardAd
                      key={`ad${index}`}
                      pubId={adsensePubId}
                      adId={
                        breakpoints.includes(width)
                          ? adsenseInfeedMobileAdId
                          : adsenseInfeedDesktopAdId
                      }
                      layoutKey={
                        breakpoints.includes(width)
                          ? adsenseInfeedMobileAdLayoutKey
                          : adsenseInfeedDesktopAdLayoutKey
                      }
                    />
                  </aside>
                )}
                <article css={theme => ({ margin: theme.spacing(1, 0) })} key={node.id}>
                  <Card>
                    <CardActionArea
                      component={RouterLink}
                      to={`/${node.slug}`}
                      title={node.title}
                      css={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}
                    >
                      <CardMedia>
                        <GatsbyImage
                          css={theme => ({
                            width: breakpoints.includes(width)
                              ? theme.spacing(10)
                              : theme.spacing(14),
                            height: breakpoints.includes(width)
                              ? theme.spacing(10)
                              : theme.spacing(14),
                            margin: breakpoints.includes(width)
                              ? theme.spacing(1)
                              : theme.spacing(2),
                            objectFit: 'cover',
                          })}
                          image={node.thumbnail.gatsbyImageData}
                          alt={node.thumbnail.title}
                        />
                      </CardMedia>
                      <div
                        css={theme => ({
                          display: 'flex',
                          flexDirection: 'column',
                          margin: theme.spacing(2),
                          width: '100%',
                        })}
                      >
                        <Typography
                          component="h3"
                          variant={breakpoints.includes(width) ? 'subtitle1' : 'h6'}
                        >
                          {node.title}
                        </Typography>
                        <Typography
                          variant={breakpoints.includes(width) ? 'body2' : 'body1'}
                          color="text.secondary"
                          paragraph
                        >
                          {node.excerpt}
                        </Typography>
                        <Typography
                          variant={breakpoints.includes(width) ? 'caption' : 'body2'}
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
              </>
            ))}
          </section>
        );
      })}
    </>
  );
};
