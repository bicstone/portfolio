# Vanilla

React や Gatsby を用いずに呼び出す JavaScript
`</body>` の直前で呼び出される

## 背景

- 静的 HTML と hydrate 後の状態が異なると、レイアウトがちらつく FOUC が発生してしまう
- 静的 HTML は、ライトテーマかつ、 xs 横幅でジェネレートされる

## 機能

- hydrate されるまでは、body を透明にする
  - Google Optimize page-hiding CSS と同じ手法
- ライトテーマかつ、xs 横幅環境ではチラつかないのでローディング画面を表示しない
  - 不要なローディング画面は表示しないのでパフォーマンスの向上
  - クローラーアクセス時の表示速度が上がり SEO 対策にもなる

## 実装

- `</body>` の直前で `<script>` タグとして呼び出される
- ローディング解除は、 gatsby の onInitialClientRender イベントで行う ( `gatsby-browser.ts` を参照)
  - フェールセーフとして、 2 秒経っても呼び出されない場合もローディング解除
