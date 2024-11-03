export const TRANSLATION = {
  blog: {
    adLabel: "広告",
    authorTitle: "著者について",
    introductionTitle: "はじめに",
    relatedTitle: "関連記事",
    shareTitle: "シェア",
    tableOfContentsTitle: "目次",
  },
  bulkExpandButton: {
    hint: "このボタンを押下すると、全項目の詳細説明の展開を切り替えられます。すべて展開せずとも、項目上でキーボードの Enter を押下すると、それぞれの項目で展開を操作できます。",
    label: {
      allLess: "すべて収納する",
      allMore: "すべて展開する",
    },
  },
  certification: {
    detail: {
      title: "発行機関による認証情報を表示する",
    },
  },
  footer: {
    copyright: "Oishi Takanori",
  },
  hello: {
    description:
      "Webエンジニア・Certified ScrumMaster・アマチュア技術広報・電気工事士・機械エンジニアです。技術だけにこだわらずに広い視野を持ち、多角的なアプローチで迅速かつ効果的にプロダクトの価値を最大化し、社会やステークホルダーの課題解決に貢献します。",
    description2:
      "メールや DM などお気軽にご連絡ください。すべてに目を通します。",
    goToPortfolio: "ポートフォリオ",
    icon: {
      fukkireta:
        "ニコニコした Oishi Takanori の似顔絵がニコニコ動画で流行した「吹っ切れた」を真似しているアニメーション。クリックするとアニメーションを停止します。",
      normal:
        "ニコニコした Oishi Takanori の似顔絵。クリックするとアニメーションを開始します。",
    },
    title: "大石 貴則 (@bicstone)",
  },
  home: {
    contactsTitle: "お問い合わせ",
    historiesTitle: "経歴",
    historiesHelp:
      "各項目をクリックすると詳細を閲覧できます。「すべてを展開する」ボタンをクリックすると全項目が展開されます。",
    ossesHelp:
      "使用している OSS へのコントリビュートの他、微力ながら一部コミッターとしての活動をしています。",
    ossesTitle: "OSS",
    projectsTitle: "プロジェクト",
    projectsHelp:
      "詳細は表示しておりませんが、お問い合わせ頂ければお送りいたします。",
    qualificationsHelp:
      "取得した資格の一覧です。情報系の学問を修得していないため、資格取得を通して勉強をしています。",
    qualificationsTitle: "資格",
    skillsHelp:
      "業務経験があるスキル一覧です。今後も使用したい技術に絞り込んでいます。",
    skillsTitle: "スキル",
  },
  notFound: {
    backToHome: "ポートフォリオに移動",
    backToTimeline: "アウトプット一覧に移動",
    description: "ページが見つかりませんでした。",
    title: "Not Found",
  },
  privacy: {
    title: "プライバシーポリシー",
  },
  scrollToTop: {
    title: "最上部に移動",
  },
  search: {
    button: {
      hint: "検索フォームを開く",
      title: "検索",
    },
    close: {
      hint: "検索フォームを閉じる",
      title: "esc",
    },
    loading: "読み込み中",
    error:
      "インデックスの取得に失敗しました。お手数をおかけしますが、 Google などの検索エンジンを用いて検索お願いします。",
    hint: "アウトプットを検索",
    title: "検索",
  },
  outputs: {
    title: "Outputs",
  },
  projects: {
    title: "Projects",
  },
  histories: {
    title: "Histories",
  },
} as const satisfies Record<
  string,
  Record<string, string | Record<string, string>>
>;
