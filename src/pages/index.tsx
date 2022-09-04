import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
  Container,
  Typography,
  styled,
  Tooltip,
  IconButton,
} from "@mui/material";
import { graphql } from "gatsby";
import { GatsbySeo, LogoJsonLd } from "gatsby-plugin-next-seo";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useState } from "react";
import {
  HelloGroup,
  OSSList,
  CertificationList,
  HistoryList,
  ProjectList,
  SkillList,
  WhatICanDoList,
} from "src/components";
import { useSiteMetadata } from "src/hooks";

import type { PageProps } from "gatsby";
import type { ReactNode } from "react";
import type { IndexPageQuery } from "src/types";

import { isDefined } from "@/commons/typeguard";
import { WrapPageElement } from "@/layouts/WrapPageElement";
import { Head } from "@/templates/Head";

const PaddingContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

interface SectionProps {
  title: string;
  help?: string;
  children: ReactNode;
}

const Section = ({ title, help, children }: SectionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const openTooltip = (): void => {
    setIsOpen(true);
  };

  const closeTooltip = (): void => {
    setIsOpen(false);
  };

  const toggleTooltip = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <PaddingContainer maxWidth="lg">
        <div
          css={(theme) => ({
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: theme.spacing(2),
            gap: theme.spacing(0.5),
          })}
        >
          <Typography component="h2" variant="h4">
            {title}
          </Typography>
          {isDefined(help) && (
            <Tooltip
              title={help}
              open={isOpen}
              onOpen={openTooltip}
              onClose={closeTooltip}
              disableTouchListener
            >
              <IconButton
                size="small"
                color="primary"
                css={{ cursor: "help" }}
                onClick={toggleTooltip}
              >
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
        {children}
      </PaddingContainer>
    </section>
  );
};

const Home = ({ data }: PageProps<IndexPageQuery>): JSX.Element => {
  const siteMetadata = useSiteMetadata();
  const { t } = useI18next();

  const icon = data.icon.svg.content;

  return (
    <WrapPageElement>
      <GatsbySeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        openGraph={{
          type: "profile",
          title: siteMetadata.title,
          description: siteMetadata.description,
          images: [
            {
              url: siteMetadata.image,
              alt: siteMetadata.title,
            },
          ],
        }}
      />
      <LogoJsonLd
        url={siteMetadata.siteUrl}
        logo={`${siteMetadata.siteUrl}${siteMetadata.image}`}
        defer
      />
      <PaddingContainer maxWidth="lg">
        <HelloGroup links={data.links.edges} icon={icon} />
      </PaddingContainer>
      <Section title={t("home.what-i-can-dos-title")}>
        <WhatICanDoList whatICanDos={data.whatICanDos.edges} />
      </Section>
      <Section title={t("home.projects-title")}>
        <ProjectList projects={data.projects.edges} />
      </Section>
      <Section title={t("home.histories-title")}>
        <HistoryList histories={data.histories.edges} />
      </Section>
      <Section title={t("home.osses-title")} help={t("home.osses-help")}>
        <OSSList osses={data.osses.edges} />
      </Section>
      <Section title={t("home.skills-title")} help={t("home.skills-help")}>
        <SkillList skills={data.skills.edges} />
      </Section>
      <Section
        title={t("home.qualifications-title")}
        help={t("home.qualifications-help")}
      >
        <CertificationList certification={data.certification.edges} />
      </Section>
    </WrapPageElement>
  );
};

export default Home;

export const query = graphql`
  query IndexPage($language: String!) {
    # 自己紹介部分リンク先を取得する
    links: allContentfulHello(sort: { fields: sortKey, order: ASC }) {
      edges {
        node {
          id
          node_locale
          name
          href
        }
      }
    }
    # お手伝いできること一覧を取得する
    whatICanDos: allContentfulWhatICanDo(
      sort: { fields: sortKey, order: ASC }
    ) {
      edges {
        node {
          id
          node_locale
          name
          subName
          icon {
            name
            svg {
              svg
            }
          }
        }
      }
    }
    # プロジェクト一覧を取得する
    projects: allContentfulProject(sort: { fields: startDate, order: DESC }) {
      edges {
        node {
          id
          node_locale
          name
          tags {
            name
          }
          icon {
            name
            svg {
              svg
            }
          }
          subName
          detail {
            childMdx {
              body
            }
          }
          startDate(formatString: "YYYY")
        }
      }
    }
    # 経歴一覧を取得する
    histories: allContentfulHistory(sort: { fields: date, order: DESC }) {
      edges {
        node {
          id
          node_locale
          date(formatString: "yyyy")
          name
          subName
          icon {
            name
            svg {
              svg
            }
          }
        }
      }
    }
    # OSS一覧を取得する
    osses: allContentfulOss(sort: { fields: startDate, order: DESC }) {
      edges {
        node {
          id
          node_locale
          name
          tags {
            name
          }
          icon {
            name
            svg {
              svg
            }
          }
          subName
          startDate(formatString: "yyyy/MM")
          href
        }
      }
    }
    # スキル一覧を取得する
    skills: allContentfulSkillMap(sort: { fields: sortKey, order: ASC }) {
      edges {
        node {
          id
          name
          node_locale
          expanded
          skills {
            id
            level
            name
          }
          skillGroups {
            id
            name
            skills {
              id
              level
              name
            }
          }
        }
      }
    }
    # 資格一覧を取得する
    certification: allContentfulQualificationMap(
      sort: { fields: sortKey, order: ASC }
    ) {
      edges {
        node {
          id
          node_locale
          name
          expanded
          qualifications {
            id
            name
            date(formatString: "yyyy/MM")
          }
        }
      }
    }
    # 原稿を取得する
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    # Bicstoneアイコンを取得する
    # "5qVePilXXNs2WxxIcvndga"は、contentful assetsのアイコンのID
    icon: contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
      title
      svg {
        content
      }
    }
  }
`;

export { Head };
