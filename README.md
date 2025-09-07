# Oishi Takanori (@bicstone) ポートフォリオ & ブログ

![GitHub Actions による本番環境へのデプロイの結果](https://github.com/bicstone/portfolio/actions/workflows/deploy-to-prod.yml/badge.svg?branch=main)
![GitHub Actions による検証環境へのデプロイの結果](https://github.com/bicstone/portfolio/actions/workflows/deploy-to-stg.yml/badge.svg?branch=stg)
[![FOSSAによる依存関係のライセンススキャン結果](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_shield)
[![Javascript Standard Style を採用しています](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

2020 年に作成したポートフォリオサイトです。  
~~2022 年には、ブログ機能を追加しました。~~ 2024 年に削除

![PC・タブレット・スマホでポートフォリオサイトを表示した写真、マルチプラットフォームに対応したことを示す図](./docs/readme-images/portfolio.jpg)

- 本番環境 <https://bicstone.me>
- 検証環境 <https://bicstone.github.io/portfolio>

## 構成

Gatsby.js + Amazon CloudFront (Cloud Functions) + Amazon S3 を用いた Jamstack 構成としました。

※ 検証環境は GitHub Pages を使用

## 特徴

### パフォーマンス

- SSG で構築しており、ビルド後の資産は完全に静的であるため、高速で応答します。
- インフラには、Amazon CloudFront + Amazon S3 を用いており、ユーザーの最寄りデータセンターから転送されるため通信が安定します。
- Cache-Control HTTP ヘッダーを適切に設定しており、2 回目以降に余分なダウンロードを防止したり、逆に古いコンテンツが表示されることを防ぎます。
- 画像やサードパーティスクリプトなどは遅延読み込みを行っています。
- Lighthouse を使用しレビューを受けています。

### セキュリティ

- SSG で構築しており、ビルド後の資産は完全に静的であるため、脆弱性による改ざん等のリスクが軽減されます。
- セキュリティを強化する HTTP ヘッダを設定しています。 (ただし広告配信のため CSP は最小限度の設定)
- 利用可能な暗号スイートを TLSv1.3 と TLSv1.2 に限定し、2024 年現在判明している脆弱なプロトコルをブロックしています。
- Mozilla Observatory, DeepSource, SonarCloud を使用し、レビューを受けています。
- 使用ツールは二要素認証を用いたアカウント保護を行っています。
- GitHub の Environments や Protection rule などを活用し、ブランチやシークレットの保護を行っています。
- Personal access token が必要な場面では、すべて Fine-grained PAT を用いて最小限度の権限を与えています。
- AWS への認証において OpenID Connect を活用しています。短命の認証情報を用いることで、リポジトリにシークレットを保持せずにデプロイをしています。
- Renovate を用いて依存関係を定期的にアップデートしています。
- 2023 年まで DNSSEC を構成し、DNS キャッシュ ポイズニング攻撃や DNS スプーフィングなどのリスクを軽減していました。2023 年に削除しました。

### アクセシビリティ

- 文字と背景とのコントラスト比は 4.5:1 を超えるように設定しています。
- ダークモードでは、彩度を下げて目に負担がかからないようにしています。
- キーボードのみで操作できるように設計しています。
- テキストブラウザや音声ブラウザで使用できるよう、セマンティクスなマークアップで実装しています。
- 代替テキストや、必要に応じて WAI-ARIA を設定しています。
- axe 及び Lighthouse でレビューを受けています。

### DevOps

- GitFeatureFlow を採用しています。
- CI/CD や SaaS を使用することで、開発効率を高めつつ、継続的な自動化と品質保持を行っています。
- Amazon CloudWatch による監視を行っています。
- FOSSA を用いることで、ライブラリ追加時のライセンス管理を行っています。
- Sentry を用いてエラー管理を行っています。

### テスト

- 当リポジトリでは、テストを一切作成していません。
- 下記のリポジトリで私が書くテストを参照できます。
  - [bicstone/backlog-notify](https://github.com/bicstone/backlog-notify) (jest)
  - [bicstone/gatsby-plugin-fix-fouc](https://github.com/bicstone/gatsby-plugin-fix-fouc) (jest, cypress)

## 使用技術

### 言語 / FW

- TypeScript (strict モード)
- React.js
- Gatsby.js (プラグインを活用し高速に構築ができるため選定)
- MUI material (一覧性の高いダッシュボード風のデザインにするため選定)
- Emotion
- ~~MDX~~ 2024年に削除
- ~~Prism.js~~ 2024年に削除
- React Virtuoso

### ツール

- Webpack
- Babel
- ESLint
- prettier (フォーマットを自動化することで省力化)
- graphql-code-generator (型を自動生成することで省力化)

### CI / CD ツール

- husky (ローカル環境での CI)
- GitHub Actions (CI / CD)
- SonarCloud (静的レビュー)
- DeepSource (静的レビュー)
- FOSSA (ライセンスの管理)
- Renovate (ライブラリ管理)

### その他

- Google Tag Manager
- Google Analytics
- Sentry

## タスクランナー

### ローカルサーバーを立ち上げ

```shell
pnpm run develop
```

### プロダクションビルド

```shell
pnpm run build
```

### プロダクションとしてサーバーを立ち上げ

```shell
pnpm run build
pnpm run serve
```

### キャッシュのクリア

```shell
pnpm run clean
```

### リンターによる静的解析

```shell
pnpm run lint
```

### リンターによる静的解析(自動修正モード)

```shell
pnpm run lint:fix
```

### TypeScript による型検証

```shell
pnpm run typecheck
```

### GraphQL の型情報を取り込む

```shell
pnpm run graphql
```

### amazon s3 への deploy

```shell
pnpm run deploy
```

## 動作対象ブラウザ

package.json の browserslist を参照

## Submodule について

`content` ディレクトリ及び `static` ディレクトリは、著作権などが複雑になるのを避けるため、非公開リポジトリで管理しています。

`content` は `content-sample` ディレクトリをコピーして作成してください。

`static` は空のディレクトリを作成してください。

## ライセンス

- ディレクトリ内に LICENSE ファイルがある場合、そのライセンスに従います。
- Git Submodule で参照しているプライベートリポジトリは [ライセンスなし(未公開)](https://choosealicense.com/no-permission/) です。
- その他は MIT License

[![FOSSAによる依存関係のライセンス集計](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_large)
