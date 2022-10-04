import { Typography, Grid, Card, CardHeader } from "@mui/material";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useState } from "react";

import { FukkiretaAnimationSvgIcon } from "./FukkiretaAnimationSvgIcon";
import { SocialLinks } from "./SocialLinks";

import type { PortfolioHelloFragment } from "@/generated/graphqlTypes";

import { useSiteMetadata } from "@/hooks/useSiteMetadata";

export const PortfolioHelloQuery = graphql`
  fragment PortfolioHello on ContentfulHello {
    ...SocialLinks
  }
`;

export const PortfolioHello = (props: {
  links: readonly PortfolioHelloFragment[];
}): JSX.Element => {
  const { t } = useTranslation();
  const siteMetaData = useSiteMetadata();
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} css={{ textAlign: "center" }}>
        <FukkiretaAnimationSvgIcon
          activeAnimation={activeAnimation}
          width={100}
          height={100}
          src={`${siteMetaData.siteUrl}${siteMetaData.imageAvatar}`}
          loading="eager"
          decoding="async"
          alt={
            activeAnimation ? t("hello.icon.fukkireta") : t("hello.icon.normal")
          }
          onClick={() => setActiveAnimation(!activeAnimation)}
        />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Card>
          <CardHeader
            disableTypography
            title={
              <Typography component="p" variant="h6" gutterBottom>
                {t("hello.title")}
              </Typography>
            }
            subheader={
              <>
                <Typography variant="body1" gutterBottom>
                  {t("hello.description")}
                </Typography>
                <SocialLinks links={props.links} />
              </>
            }
          />
        </Card>
      </Grid>
    </Grid>
  );
};
