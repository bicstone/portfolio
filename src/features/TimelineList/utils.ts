import type {
  CertificationsYaml,
  HistoriesYaml,
  ArticlesYaml,
  Mdx,
  OssesYaml,
  SlidesYaml,
  ProjectsYaml,
} from "@/generated/graphqlTypes";

export type TimelineItem =
  | ({ readonly __typename: "ArticlesYaml" } & Pick<
      ArticlesYaml,
      "url" | "title" | "date"
    >)
  | ({ readonly __typename: "CertificationsYaml" } & Pick<
      CertificationsYaml,
      "endDate" | "title" | "date"
    >)
  | ({ readonly __typename: "HistoriesYaml" } & Pick<
      HistoriesYaml,
      "title" | "date"
    >)
  | ({ readonly __typename: "Mdx" } & Pick<Mdx, "slug" | "title" | "date">)
  | ({ readonly __typename: "OssesYaml" } & Pick<
      OssesYaml,
      "url" | "title" | "date"
    >)
  | ({ readonly __typename: "ProjectsYaml" } & Pick<
      ProjectsYaml,
      "endDate" | "title" | "date"
    >)
  | ({ readonly __typename: "SlidesYaml" } & Pick<
      SlidesYaml,
      "url" | "title" | "date"
    >);
