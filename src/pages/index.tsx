import React from 'react';

import { Container, Typography, styled } from '@mui/material';
import { graphql, PageProps } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Layout,
  HelloGroup,
  ContactsList,
  OSSList,
  CertificationList,
  HistoryList,
  ProjectList,
  SkillList,
  WhatICanDoList,
} from 'src/components';
import { IndexPageQuery } from 'src/types';

const PaddingContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
})) as typeof Container;

const home: React.FC<PageProps<IndexPageQuery>> = ({ data }) => {
  const { t } = useI18next();

  const icon = data.icon?.svg?.content || '';
  const iconAlt = data.icon?.title || '';
  return (
    <Layout icon={icon} iconAlt={iconAlt} isHome>
      <PaddingContainer maxWidth="lg" component="section">
        <HelloGroup links={data.links.edges} icon={icon} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.contacts-title')}
        </Typography>
        <ContactsList contacts={data.contacts.edges} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.what-i-can-dos-title')}
        </Typography>
        <WhatICanDoList whatICanDos={data.whatICanDos.edges} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.projects-title')}
        </Typography>
        <ProjectList projects={data.projects.edges} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center">
          {t('home.histories-title')}
        </Typography>
        <HistoryList histories={data.histories.edges} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.osses-title')}
        </Typography>
        <OSSList osses={data.osses.edges} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.skills-title')}
        </Typography>
        <SkillList skills={data.skills.edges} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg" component="section">
        <Typography component="h2" variant="h4" align="center" paragraph>
          {t('home.qualifications-title')}
        </Typography>
        <CertificationList certification={data.certification.edges} />
      </PaddingContainer>
    </Layout>
  );
};

export default home;

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
    whatICanDos: allContentfulWhatICanDo(sort: { fields: sortKey, order: ASC }) {
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
          image {
            title
            file {
              url
            }
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          subName
          startDate(formatString: "yyyy/MM")
          href
        }
      }
    }
    # 連絡先一覧を取得する
    contacts: allContentfulContact(sort: { fields: sortKey, order: ASC }) {
      edges {
        node {
          id
          node_locale
          name
          subName
          href
          icon {
            svg {
              svg
            }
          }
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
        }
      }
    }
    # 資格一覧を取得する
    certification: allContentfulQualificationMap(sort: { fields: sortKey, order: ASC }) {
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
