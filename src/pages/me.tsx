import HelpOutlineIcon from "@mui/icons-material/HelpOutlineRounded";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { useState } from "react";

import type { MePageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";
import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { CertificationList } from "@/features/PortfolioCertification";
import { HelloContent } from "@/features/PortfolioHello";
import { HistoryList } from "@/features/PortfolioHistory";
import { OssList } from "@/features/PortfolioOss";
import { ProjectList } from "@/features/PortfolioProject";
import { WhatICanDoList } from "@/features/PortfolioWhatICanDo";
import { HeadTemplate } from "@/layouts/HeadTemplate";
import { isDefined } from "@/utils/typeguard";

export const query = graphql`
  query MePage {
    projects: allProjectsYaml(sort: { date: DESC }) {
      ...PortfolioProjectList
    }
    histories: allHistoriesYaml(sort: { date: DESC }) {
      ...PortfolioHistoryList
    }
    osses: allOssesYaml(sort: { date: DESC }) {
      ...PortfolioOssList
    }
    certifications: allCertificationsYaml(sort: { date: DESC }) {
      ...PortfolioCertificationList
    }
  }
`;

export const Head: HeadFC = ({ location }) => {
  return (
    <HeadTemplate
      location={location}
      title={SITE_METADATA.title}
      description={SITE_METADATA.description}
      image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
      imageAlt={SITE_METADATA.title}
      type="profile"
    />
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
    </section>
  );
};

const MePage = ({ data }: PageProps<MePageQuery>): JSX.Element => {
  const title = "自己紹介";

  return (
    <Container
      maxWidth="lg"
      css={(theme) => ({ margin: theme.spacing(4, "auto") })}
    >
      <Breadcrumbs title={title} />
      <Spacer y={4} />
      <HelloContent />
      <Spacer y={4} />
      <WhatICanDoList />
      <Spacer y={4} />
      <Section
        title={TRANSLATION.home.projectsTitle}
        help={TRANSLATION.home.projectsHelp}
      >
        <ProjectList projects={data.projects} />
      </Section>
      <Spacer y={4} />
      <Section
        title={TRANSLATION.home.historiesTitle}
        help={TRANSLATION.home.historiesHelp}
      >
        <HistoryList histories={data.histories} />
      </Section>
      <Spacer y={4} />
      <Section
        title={TRANSLATION.home.ossesTitle}
        help={TRANSLATION.home.ossesHelp}
      >
        <OssList osses={data.osses} />
      </Section>
      <Spacer y={4} />
      <Section
        title={TRANSLATION.home.qualificationsTitle}
        help={TRANSLATION.home.qualificationsHelp}
      >
        <CertificationList certifications={data.certifications} />
      </Section>
      <Spacer y={4} />
      <Breadcrumbs title={title} />
    </Container>
  );
};

export default MePage;
