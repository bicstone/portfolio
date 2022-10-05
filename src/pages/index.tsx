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

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps } from "gatsby";
import type { ReactNode } from "react";

import siteMetaData from "@/constants/siteMetaData";
import { PortfolioCertificationList } from "@/features/PortfolioCertification/PortfolioCertificationList";
import { PortfolioHello } from "@/features/PortfolioHello/PortfolioHello";
import { PortfolioHistoryList } from "@/features/PortfolioHistory/PortfolioHistoryList";
import { PortfolioOssList } from "@/features/PortfolioOss/PortfolioOssList";
import { PortfolioProjectList } from "@/features/PortfolioProject/PortfolioProjectList";
import { PortfolioSkillList } from "@/features/PortfolioSkill/PortfolioSkillList";
import { PortfolioWhatICanDoList } from "@/features/PortfolioWhatICanDo/PortfolioWhatICanDoList";
import { useUrl } from "@/hooks/useUrl";
import { Head } from "@/layouts/Head";
import { isDefined } from "@/utils/typeguard";

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
  const { t, language } = useI18next();
  const { currentLangUrl } = useUrl();

  return (
    <>
      <GatsbySeo
        title={siteMetaData.title}
        description={siteMetaData.description}
        openGraph={{
          type: "profile",
          title: siteMetaData.title,
          description: siteMetaData.description,
          images: [
            {
              url: `${siteMetaData.siteUrl}${siteMetaData.image}`,
              alt: siteMetaData.title,
            },
          ],
          url: currentLangUrl,
          locale: language,
        }}
      />
      <LogoJsonLd
        url={siteMetaData.siteUrl}
        logo={`${siteMetaData.siteUrl}${siteMetaData.image}`}
        defer
      />
      <PaddingContainer maxWidth="lg">
        <PortfolioHello links={data.links.nodes} />
      </PaddingContainer>
      <Section title={t("home.what-i-can-dos-title")}>
        <PortfolioWhatICanDoList whatICanDos={data.whatICanDos.nodes} />
      </Section>
      <Section title={t("home.projects-title")}>
        <PortfolioProjectList projects={data.projects.nodes} />
      </Section>
      <Section title={t("home.histories-title")}>
        <PortfolioHistoryList histories={data.histories.nodes} />
      </Section>
      <Section title={t("home.osses-title")} help={t("home.osses-help")}>
        <PortfolioOssList osses={data.osses.nodes} />
      </Section>
      <Section title={t("home.skills-title")} help={t("home.skills-help")}>
        <PortfolioSkillList skills={data.skills.nodes} />
      </Section>
      <Section
        title={t("home.qualifications-title")}
        help={t("home.qualifications-help")}
      >
        <PortfolioCertificationList certifications={data.certification.nodes} />
      </Section>
    </>
  );
};

export default Home;

export const query = graphql`
  query IndexPage($language: String!) {
    links: allContentfulHello(sort: { fields: sortKey, order: ASC }) {
      nodes {
        ...PortfolioHello
      }
    }
    whatICanDos: allContentfulWhatICanDo(
      sort: { fields: sortKey, order: ASC }
    ) {
      nodes {
        ...PortfolioWhatICanDoList
      }
    }
    projects: allContentfulProject(sort: { fields: startDate, order: DESC }) {
      nodes {
        ...PortfolioProjectList
      }
    }
    histories: allContentfulHistory(sort: { fields: date, order: DESC }) {
      nodes {
        ...PortfolioHistoryList
      }
    }
    osses: allContentfulOss(sort: { fields: startDate, order: DESC }) {
      nodes {
        ...PortfolioOssList
      }
    }
    skills: allContentfulSkillMap(sort: { fields: sortKey, order: ASC }) {
      nodes {
        ...PortfolioSkillList
      }
    }
    # 資格一覧を取得する
    certification: allContentfulQualificationMap(
      sort: { fields: sortKey, order: ASC }
    ) {
      nodes {
        ...PortfolioCertificationList
      }
    }
    # gatsby-plugin-react-i18next
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export { Head };
