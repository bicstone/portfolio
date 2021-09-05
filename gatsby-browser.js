/**
 * サービスワーカーによる更新が完了したら強制リロード
 * MEMO: このような実装は賛否両論あるが、ポートフォリオという
 * 正確性が重要なコンテンツにおいて最新のコンテンツが見れるべきという判断をした（Slackとかはその実装）。
 * 将来的には通知を表示して更新ボタンを押して貰うようにしたい（思ったより簡単にできそう）。
 * SEE: https://www.gatsbyjs.com/docs/browser-apis/#onServiceWorkerUpdateFound
 */

exports.onServiceWorkerUpdateReady = () => window.location.reload();
