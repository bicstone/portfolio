# Oishi Takanori (@bicstone) ポートフォリオ

![GitHub Actions による本番環境へのデプロイの結果](https://github.com/bicstone/portfolio/actions/workflows/deploy-to-cloudflare.yml/badge.svg?branch=main)
[![FOSSAによる依存関係のライセンススキャン結果](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_shield)
[![Javascript Standard Style を採用しています](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

2020 年に作成したポートフォリオサイトです。

## 構成

Astro で生成した静的サイトを Cloudflare Workers (Static Assets) で配信しています。ブラウザに配信する JavaScript はありません。

## 使用技術

### 言語 / FW

- TypeScript (strict モード)
- Astro (JavaScript を配信せずに静的サイトを生成できるため選定)

### ツール

- ESLint
- prettier (フォーマットを自動化することで省力化)

### CI / CD ツール

- lefthook (コミット前に lint と整形を自動で実行)
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

### TypeScript による型検証

```shell
pnpm run typecheck
```

### Cloudflare Workers でのローカル配信

```shell
pnpm run build
pnpm run cloudflare:dev
```

### Cloudflare Workers への deploy

```shell
pnpm run cloudflare:deploy
```

## 動作対象ブラウザ

Vite の既定値 (Baseline Widely Available) に従います。

## Submodule について

`content` ディレクトリ及び `static` ディレクトリは、著作権などが複雑になるのを避けるため、非公開リポジトリで管理しています。

`static` は空のディレクトリを作成してください。

## ライセンス

- ディレクトリ内に LICENSE ファイルがある場合、そのライセンスに従います。
- Git Submodule で参照しているプライベートリポジトリは [ライセンスなし(未公開)](https://choosealicense.com/no-permission/) です。
- その他は MIT License

[![FOSSAによる依存関係のライセンス集計](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fbicstone%2Fportfolio?ref=badge_large)
