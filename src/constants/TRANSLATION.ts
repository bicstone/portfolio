export const TRANSLATION = {
  blog: {
    adLabel: "広告",
    authorTitle: "著者について",
    relatedTitle: "関連記事",
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
    properAttribution:
      "Certified ScrumMaster® is a certification mark of Scrum Alliance, Inc. Any unauthorized use is strictly prohibited.",
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
      "Oishi Takanori と申します。 Webエンジニア / Certified ScrumMaster® / 情報処理安全確保支援士 / 電気工事士 / 機械エンジニア です。 様々な分野の知見を活かしジェネラリストとしてプロダクトに幅広く携わり、相互成長し続けられるエンジニアを目指しています。 好きなネジはイモネジです。",
    goToPortfolio: "ポートフォリオ",
    icon: {
      fukkireta:
        "ニコニコした Oishi Takanori の似顔絵がニコニコ動画で流行した「吹っ切れた」を真似しているアニメーション。クリックするとアニメーションを停止します。",
      normal:
        "ニコニコした Oishi Takanori の似顔絵。クリックするとアニメーションを開始します。",
    },
    title: "ビックストーン大石 (@bicstone)",
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
    backToHome: "ホームに移動",
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
    error:
      "ブログ記事インデックスの取得に失敗しました。お手数をおかけしますが、 Google などの検索エンジンを用いて検索お願いします。",
    hint: "まっしろブログを検索",
    title: "検索",
  },
} as const satisfies Record<
  string,
  Record<string, string | Record<string, string>>
>;
