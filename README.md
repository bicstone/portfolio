# Oishi Takanori (@bicstone)ポートフォリオ

![GitHub Actionsによる本番環境へのデプロイの結果](https://github.com/bicstone/portfolio/actions/workflows/deploy-to-cloudflare.yml/badge.svg?branch=main)
[![FOSSAによる依存関係のライセンススキャン結果](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_shield)
[![Javascript Standard Styleを採用しています](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

2020年に作成したポートフォリオサイトです。

## 構成

Astroで生成した静的サイトをCloudflare Workers (Static Assets)で配信しています。ブラウザに配信するJavaScriptはありません。

## 使用技術

### 言語 / FW

- TypeScript (strictモード)
- Astro (JavaScriptを配信せずに静的サイトを生成できるため選定)

### ツール

- ESLint
- Vitest
- prettier (フォーマットを自動化することで省力化)

### CI / CDツール

- lefthook (コミット前にlintと整形を自動で実行)
- GitHub Actions (CI / CD)
- FOSSA (ライセンスの管理)
- Renovate (ライブラリ管理)

## タスクランナー

### ローカルサーバーを立ち上げ

```shell
pnpm run dev
```

### プロダクションビルド

```shell
pnpm run build
```

### プロダクションとしてサーバーを立ち上げ

```shell
pnpm run build
pnpm run preview
```

### リンターによる静的解析

```shell
pnpm run lint
```

### リンターによる静的解析(自動修正モード)

```shell
pnpm run lint:fix
```

### フォーマッターによる検証

```shell
pnpm run format
```

### フォーマッターによる検証(自動修正モード)

```shell
pnpm run format:fix
```

### TypeScriptによる型検証

```shell
pnpm run typecheck
```

### テスト

```shell
pnpm run test
```

### Cloudflare Workersでのローカル配信

```shell
pnpm run build
pnpm run cloudflare:dev
```

### Cloudflare Workersへのdeploy

```shell
pnpm run cloudflare:deploy
```

## 動作対象ブラウザ

Viteの既定値(Baseline Widely Available)に従います。

## ライセンス

MIT License

[![FOSSAによる依存関係のライセンス集計](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_large)
