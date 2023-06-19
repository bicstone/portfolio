import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";

import type { MePageQuery } from "@/generated/graphqlTypes";
import type { PageProps, HeadFC } from "gatsby";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Spacer } from "@/components/Spacer";
import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { CertificationList } from "@/features/PortfolioCertification";
import { HelloContent } from "@/features/PortfolioHello";
import { HistoryList } from "@/features/PortfolioHistory";
import { OssList } from "@/features/PortfolioOss";
import { ProjectList } from "@/features/PortfolioProject";
import { WhatICanDoList } from "@/features/PortfolioWhatICanDo";
import { HeadTemplate } from "@/layouts/HeadTemplate";

const title = "Profile";

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
      title={`${title} - ${SITE_METADATA.title}`}
      description={SITE_METADATA.description}
      image={`${SITE_METADATA.siteUrl}${SITE_METADATA.image}`}
      imageAlt={SITE_METADATA.title}
      type="profile"
    />
  );
};

const MePage = ({ data }: PageProps<MePageQuery>): JSX.Element => {
  return (
    <Container maxWidth="lg" fixed sx={{ marginY: 4, marginX: "auto" }}>
      <Breadcrumbs title={title} />
      <Spacer y={8} />
      <section>
        <HelloContent linkToHome />
      </section>
      <Spacer y={8} />
      <section>
        <WhatICanDoList />
      </section>
      <Spacer y={8} />
      <section>
        <Typography component="h2" variant="h4" fontWeight="bold" paragraph>
          プロジェクト
        </Typography>
        <ProjectList projects={data.projects} />
      </section>
      <Spacer y={8} />
      <section>
        <Typography component="h2" variant="h4" fontWeight="bold" paragraph>
          経歴
        </Typography>
        <HistoryList histories={data.histories} />
      </section>
      <Spacer y={8} />
      <section>
        <Typography component="h2" variant="h4" fontWeight="bold" paragraph>
          OSS
        </Typography>
        <OssList osses={data.osses} />
      </section>
      <Spacer y={8} />
      <section>
        <Typography component="h2" variant="h4" fontWeight="bold" paragraph>
          資格
        </Typography>
        <CertificationList certifications={data.certifications} />
      </section>
      <Spacer y={8} />
      <Breadcrumbs title={title} />
    </Container>
  );
};

export default MePage;
