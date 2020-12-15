# Takanori Oishi ポートフォリオ 😎

![Node.js CI](https://github.com/bicstone/portfolio/workflows/Node.js%20CI/badge.svg)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_shield)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bicstone_masshiro.me&metric=alert_status)](https://sonarcloud.io/dashboard?id=bicstone_masshiro.me)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/bicstone/masshiro.me.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/bicstone/masshiro.me/alerts/)

Takanori Oishi がフルスクラッチで作成したポートフォリオサイトです。

## 構成 🧐

Gatsby.js + Contentful + Amazon CloudFront (Lambda@Edge) + Amazon S3 を用いた Jamstack 構成

## タスクランナー一覧 🚀

### 開発サーバーを立ち上げ

```shell
yarn develop
(...or)
yarn dev
(...or)
yarn start
```

### プロダクションビルドしてサーバーを立ち上げ

```shell
yarn build
yarn serve
```

### キャッシュのクリア

```shell
yarn clean
```

### リンターによる静的解析

```shell
yarn lint
```

### リンターによる静的解析(自動修正モード)

```shell
yarn lint:fix
```

### TypeScript による型検証

```shell
yarn typecheck
(...or)
yarn tc
```

### 翻訳 JSON を更新

```shell
yarn extract
(...or)
yarn t
```

### GraphQL の型情報を取り込む

```shell
yarn codegen
(...or)
yarn g
```

### barrelsby によるバレル(index.ts)の生成・更新

```shell
yarn barrelsby
(...or)
yarn b
```

## 使用言語/FW 🥰

- TypeScript
- React.js
- Gatsby.js
- Material-UI
- i18next

## 使用ツール 😍

- Babel
- graphql-code-generator
- prettier
- ESLint
- barrelsby
- husky

## CI/CD ツール 😘

- GitHub Actions
- Gatsby Cloud
- Renovate
- DeepCode
- SonarCloud
- LGTM
- FOSSA
- Semantic Pull Request

## ライセンス 🤗

MIT

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_large)
