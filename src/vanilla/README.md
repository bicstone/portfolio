# Vanilla

## 背景

- 静的 HTML と hydrate 後の状態が異なると、レイアウトがちらつく FOUC が発生してしまう。
- 静的 HTML は、ライトテーマかつ、 xs 横幅でジェネレートされる。

## 機能

- hydrate されるまでは、body を透明にする
  - Google Optimize page-hiding CSS と同じ手法
- ライトテーマかつ、xs 横幅環境ではチラつかないのでローディング画面を表示しない
  - 不要なローディング画面は表示しない
  - クローラーのアクセス時はこの条件になるのでページ表示速度が上がり SEO 対策になる

## 実装

- gatsby を読み込む前、dom 作成後の早い段階で動作させる (vanilla js)
- gatsby の onInitialClientRender イベントで透明解除
  - フェールセーフとして、 2 秒経っても呼び出されない場合は透明を解除する
