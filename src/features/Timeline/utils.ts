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
      "id" | "url" | "title" | "date"
    >)
  | ({ readonly __typename: "CertificationsYaml" } & Pick<
      CertificationsYaml,
      "id" | "endDate" | "title" | "date"
    >)
  | ({ readonly __typename: "HistoriesYaml" } & Pick<
      HistoriesYaml,
      "id" | "title" | "date"
    >)
  | ({ readonly __typename: "Mdx" } & Pick<
      Mdx,
      "id" | "slug" | "title" | "date"
    >)
  | ({ readonly __typename: "OssesYaml" } & Pick<
      OssesYaml,
      "id" | "url" | "title" | "date"
    >)
  | ({ readonly __typename: "ProjectsYaml" } & Pick<
      ProjectsYaml,
      "id" | "endDate" | "title" | "date"
    >)
  | ({ readonly __typename: "SlidesYaml" } & Pick<
      SlidesYaml,
      "id" | "url" | "title" | "date"
    >);
