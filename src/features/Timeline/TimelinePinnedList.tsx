import { TimelineItem } from "./TimelineList";

// TODO: ベタ書きはやめたい
const timelineItems = [
  {
    __typename: "NotesYaml",
    id: "0a72183c-ee23-5d74-8cad-73117d1fe3be",
    dateX: "1704787407",
    title: "バスの座席数がどんどん減っていく理由",
    date: "2024-01-09T08:03:27.000Z",
    url: "https://note.com/bicstone/n/n20ac6eae2e69",
  },
  {
    __typename: "ArticlesYaml",
    id: "13a1af26-aedc-5d4d-b658-bf792cb460cf",
    dateX: "1704758400",
    title:
      "アウトプットはどうして続かないのか？「モチベの泉」を枯らさない5つの掟",
    date: "2024-01-09T00:00:00.000Z",
    url: "https://zenn.dev/bicstone/articles/keep-you-motivated-to-output",
  },
  {
    __typename: "SlidesYaml",
    id: "787cee61-832c-5275-ad98-796d5fdfb085",
    dateX: "1702911600",
    title: "アウトプットのモチベーションを維持する4つの掟",
    date: "2023-12-18T15:00:00.000Z",
    url: "https://speakerdeck.com/bicstone/keep-you-motivated-to-output",
  },
  {
    __typename: "OssesYaml",
    id: "322e537a-3034-554e-b733-3b89cc131a89",
    dateX: "1701183600",
    title: "bicstone (npx card)",
    date: "2023-11-28T15:00:00.000Z",
    url: "https://github.com/bicstone/bicstone",
  },
  {
    __typename: "ArticlesYaml",
    id: "2ee07210-b6c7-57dd-96fb-9c8f69b7cc9f",
    dateX: "1695087000",
    title:
      "【GraphQL】スキーマ駆動開発におけるバリデーションの取り決め設計パターン集",
    date: "2023-09-19T01:30:00.000Z",
    url: "https://zenn.dev/bicstone/articles/graphql-validation",
  },
  {
    __typename: "ArticlesYaml",
    id: "f121165b-f87f-5582-b7c2-2748b4ad0de3",
    dateX: "1694398260",
    title: "【GraphQL】スキーマ駆動開発におけるエラーレスポンス設計パターン集",
    date: "2023-09-11T02:11:00.000Z",
    url: "https://zenn.dev/bicstone/articles/graphql-error-response",
  },
  {
    __typename: "SlidesYaml",
    id: "3e258fae-55ac-523e-8ead-084205654aee",
    dateX: "1688396400",
    title: "脱KPTで楽しく有意義に振り返り！ Sailboat Retrospective",
    date: "2023-07-03T15:00:00.000Z",
    url: "https://speakerdeck.com/bicstone/kpt-to-sailboat-retrospective",
  },
  {
    __typename: "SlidesYaml",
    id: "f8dfb7a9-6cd3-58cb-aa09-9f7748c41161",
    dateX: "1686236400",
    title: "OSSのメンテナーになってみた / Becoming an OSS maintainer",
    date: "2023-06-08T15:00:00.000Z",
    url: "https://speakerdeck.com/bicstone/becoming-an-oss-maintainer",
  },
  {
    __typename: "ArticlesYaml",
    id: "bc7cdf9c-1304-50a4-8334-045181e01fc9",
    dateX: "1685926800",
    title: "GraphQL の配列が nullable になって扱いにくい問題の対処法",
    date: "2023-06-05T01:00:00.000Z",
    url: "https://zenn.dev/bicstone/articles/graphql-nullable",
  },
  {
    __typename: "SlidesYaml",
    id: "8e7460bf-bee1-57ac-bd7b-a37f6ec450fb",
    dateX: "1685286000",
    title:
      "ファイブフィンガーでスクラムチームの心理的安全性を高める / Fist to Five",
    date: "2023-05-28T15:00:00.000Z",
    url: "https://speakerdeck.com/bicstone/fist-to-five",
  },
  {
    __typename: "ArticlesYaml",
    id: "7c348ca6-33b7-53bb-b9fe-642bc21583b7",
    dateX: "1682904600",
    title: "月 1 回出社のハイブリッドワークでチームの信頼関係を育んだ話",
    date: "2023-05-01T01:30:00.000Z",
    url: "https://zenn.dev/bicstone/articles/hybrid-work-event",
  },
  {
    __typename: "ArticlesYaml",
    id: "a4c82202-ba98-5c3f-b5d4-c1a8ed08d7e4",
    dateX: "1680485400",
    title: "もうブロッカーにしない！コードレビューを爆速にするための組織づくり",
    date: "2023-04-03T01:30:00.000Z",
    url: "https://zenn.dev/bicstone/articles/code-review-blocker",
  },
  {
    __typename: "ArticlesYaml",
    id: "a015f8ab-6036-5217-9057-c5bdcf9aaf3f",
    dateX: "1678068000",
    title: "コードレビューにラベルを付けるだけでチームの心理的安全性を高めた話",
    date: "2023-03-06T02:00:00.000Z",
    url: "https://zenn.dev/bicstone/articles/code-review-comment-prefix",
  },
  {
    __typename: "OssesYaml",
    id: "06740451-e7e1-5315-84cc-3d4c51a792dc",
    dateX: "1573916400",
    title: "ra-language-japanese",
    date: "2019-11-16T15:00:00.000Z",
    url: "https://github.com/bicstone/ra-language-japanese",
  },
  {
    __typename: "OssesYaml",
    id: "1432a786-ba81-5c97-951c-f6046b44bf6b",
    dateX: "1573743600",
    title: "backlog-notify",
    date: "2019-11-14T15:00:00.000Z",
    url: "https://github.com/bicstone/backlog-notify",
  },
] as const;

export const TimelinePinnedList = (): JSX.Element => {
  return (
    <>
      {timelineItems.map((item) => (
        <TimelineItem key={item.id} item={item} />
      ))}
    </>
  );
};
