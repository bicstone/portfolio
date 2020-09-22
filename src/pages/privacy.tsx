import React from 'react';
import { PageProps } from 'gatsby';

import { Container, Typography } from '@material-ui/core';
import Layout from '../components/Layout';

const privacy: React.FC<PageProps> = ({ path }) => {
  return (
    <Layout pathname={path} isHome>
      <Container maxWidth="md">
        <Typography component="h2" variant="h4" paragraph>
          Cookieポリシー
        </Typography>
        <Typography paragraph>
          当サイト閲覧時、ポップアップ画面のCookieの利用に関する同意ボタンを押すと、ご利用の間はCookieの利用に同意しているとみなされます。
        </Typography>
        <Typography paragraph>
          当サイトは調査分析の目的でサードパーティのCookieを利用し、閲覧したページに関する情報やアクセスするコンピュータに関する情報など、ユーザーがサイトで行った活動に関する情報を収集し、分析しております。これらのサードパーティの情報の活用に関しては、下記をご確認ください。当該サードパーティのプライバシーポリシーにて、Cookieを削除するオプトアウトすることが可能です。
        </Typography>
        <Typography paragraph>
          <a href="https://policies.google.com/" rel="external noreferrer nofollow" target="_blank">
            Google アナリティクス
          </a>
        </Typography>
      </Container>
    </Layout>
  );
};

export default privacy;
