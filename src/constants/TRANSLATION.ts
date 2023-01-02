export const TRANSLATION = {
  blog: {
    adLabel: "広告",
    authorTitle: "著者について",
    introductionTitle: "はじめに",
    relatedTitle: "関連記事",
    shareTitle: "シェア",
    tableOfContentsTitle: "目次",
    title: "まっしろブログ",
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
  header: {
    avatar: "ニコニコした Oishi Takanori の似顔絵",
    goToPortfolio: "ポートフォリオに移動",
    changeLanguageTitle: "言語切替",
    githubTitle: "GitHub",
    githubUrl: "https://github.com/bicstone/",
    titleHome: "Oishi Takanori",
    toggleDarkThemeTitle: "ダークモード切替",
  },
  hello: {
    description:
      "Webエンジニア / Certified ScrumMaster® / 情報処理安全確保支援士 / 電気工事士 / 機械エンジニア です。 様々な分野の知見を活かしジェネラリストとしてプロダクトに幅広く携わり、相互成長し続けられるエンジニアを目指しています。 好きなネジはイモネジです。",
    goToPortfolio: "ポートフォリオ",
    icon: {
      fukkireta:
        "ニコニコした Oishi Takanori の似顔絵がニコニコ動画で流行した「吹っ切れた」を真似しているアニメーション。クリックするとアニメーションを停止します。",
      normal:
        "ニコニコした Oishi Takanori の似顔絵。クリックするとアニメーションを開始します。",
    },
    title: "Oishi Takanori (@bicstone)",
  },
  histories: {
    date: "年",
  },
  home: {
    contactsTitle: "お問い合わせ",
    historiesTitle: "経歴",
    ossesHelp:
      "使用している OSS へのコントリビュートの他、微力ながら一部コミッターとしての活動をしています。",
    ossesTitle: "OSS",
    projectsTitle: "プロジェクト",
    qualificationsHelp:
      "取得した資格の一覧です。情報系の学問を修得していないため、資格取得を通して勉強をしています。",
    qualificationsTitle: "資格",
    skillsHelp:
      "業務経験があるスキル一覧です。今後も使用したい技術に絞り込んでいます。",
    skillsTitle: "スキル",
  },
  notFound: {
    backToHome: "ポートフォリオに移動",
    backToBlog: "ブログ記事一覧に移動",
    description: "ページが見つかりませんでした。",
    title: "Not Found",
  },
  privacy: {
    title: "プライバシーポリシー・お問い合わせ",
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
      "ブログ記事インデックスの取得に失敗しました。お手数をおかけしますが、 Google などの検索エンジンを用いて検索お願いします。",
    hint: "まっしろブログを検索",
    title: "検索",
  },
  share: {
    twitter: {
      color: "#1aa1f2",
      name: "Twitter",
      title: "Twitter で共有する (新しい window で開きます)",
    },
    facebook: {
      color: "#3b5897",
      name: "Facebook",
      title: "Facebook で共有する (新しい window で開きます)",
    },
    hatenaBookmark: {
      color: "#2e6dbe",
      name: "はてブ",
      title: "はてなブックマークを追加 (新しい window で開きます)",
    },
    pocket: {
      color: "#f03f56",
      name: "Pocket",
      title: "Pocket に追加  (新しい window で開きます)",
    },
    linkedin: {
      color: "#0077b5",
      name: "LinkedIn",
      title: "Linkedin で共有する  (新しい window で開きます)",
    },
    line: {
      color: "#00c400",
      name: "LINE",
      title: "LINE で共有する  (新しい window で開きます)",
    },
  },
} as const satisfies Record<
  string,
  Record<string, string | Record<string, string>>
>;
