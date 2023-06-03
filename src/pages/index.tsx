import HelpOutlineIcon from "@mui/icons-material/HelpOutlineRounded";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import { graphql } from "gatsby";
import { useState } from "react";

import type { IndexPageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";
import type { ReactNode } from "react";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { CertificationList } from "@/features/PortfolioCertification";
import { HelloContent } from "@/features/PortfolioHello";
import { HistoryList } from "@/features/PortfolioHistory";
import { OssList } from "@/features/PortfolioOss";
import { ProjectList } from "@/features/PortfolioProject";
import { SkillList } from "@/features/PortfolioSkill";
import { WhatICanDoList } from "@/features/PortfolioWhatICanDo";
import { HeadTemplate } from "@/layouts/HeadTemplate";
import { isDefined } from "@/utils/typeguard";

const PaddingContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

export const query = graphql`
  query IndexPage {
    links: allLinksYaml(sort: { sortKey: ASC }) {
      nodes {
        ...PortfolioHelloContent
      }
    }
    whatICanDos: allContentfulWhatICanDo(sort: { sortKey: ASC }) {
      nodes {
        ...PortfolioWhatICanDoList
      }
    }
    projects: allContentfulProject(sort: { startDate: DESC }) {
      nodes {
        ...PortfolioProjectList
      }
    }
    histories: allContentfulHistory(sort: { date: DESC }) {
      nodes {
        ...PortfolioHistoryList
      }
    }
    osses: allContentfulOss(sort: { startDate: DESC }) {
      nodes {
        ...PortfolioOssList
      }
    }
    skills: allContentfulSkillMap(sort: { sortKey: ASC }) {
      nodes {
        ...PortfolioSkillList
      }
    }
    certification: allContentfulQualificationMap(sort: { sortKey: ASC }) {
      nodes {
        ...PortfolioCertificationList
      }
    }
  }
`;

export const Head: HeadFC = ({ location }) => {
  return (
    <>
      <HeadTemplate
        location={location}
        title={SITE_METADATA.title}
        description={SITE_METADATA.description}
        image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
        imageAlt={SITE_METADATA.title}
        type="profile"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: SITE_METADATA.siteUrl,
            logo: `${SITE_METADATA.siteUrl}${SITE_METADATA.image}`,
          }),
        }}
      />
    </>
  );
};

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
                color="secondary"
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
  return (
    <>
      <PaddingContainer maxWidth="lg">
        <HelloContent links={data.links.nodes} />
      </PaddingContainer>
      <PaddingContainer maxWidth="lg">
        <WhatICanDoList whatICanDos={data.whatICanDos.nodes} />
      </PaddingContainer>
      <Section
        title={TRANSLATION.home.projectsTitle}
        help={TRANSLATION.home.projectsHelp}
      >
        <ProjectList projects={data.projects.nodes} />
      </Section>
      <Section
        title={TRANSLATION.home.historiesTitle}
        help={TRANSLATION.home.historiesHelp}
      >
        <HistoryList histories={data.histories.nodes} />
      </Section>
      <Section
        title={TRANSLATION.home.skillsTitle}
        help={TRANSLATION.home.skillsHelp}
      >
        <SkillList skills={data.skills.nodes} />
      </Section>
      <Section
        title={TRANSLATION.home.ossesTitle}
        help={TRANSLATION.home.ossesHelp}
      >
        <OssList osses={data.osses.nodes} />
      </Section>
      <Section
        title={TRANSLATION.home.qualificationsTitle}
        help={TRANSLATION.home.qualificationsHelp}
      >
        <CertificationList certifications={data.certification.nodes} />
      </Section>
    </>
  );
};

export default Home;
