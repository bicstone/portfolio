import { Typography, Grid, Card, CardHeader } from "@mui/material";
import { graphql, withPrefix } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useState } from "react";

import { FukkiretaAnimationSvgIcon } from "./FukkiretaAnimationSvgIcon";
import { SocialLinks } from "./SocialLinks";

import type { PortfolioHelloContentFragment } from "@/generated/graphqlTypes";

import siteMetaData from "@/constants/siteMetaData";

export const query = graphql`
  fragment PortfolioHelloContent on ContentfulHello {
    ...SocialLinks
  }
`;

export const HelloContent = (props: {
  links: readonly PortfolioHelloContentFragment[];
}): JSX.Element => {
  const { links } = props;

  const { t } = useI18next();
  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid
        item
        xs={12}
        sm={3}
        md={2}
        css={(theme) => ({
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          [theme.breakpoints.up("sm")]: {
            flexDirection: "column",
            alignItems: "center",
          },
        })}
      >
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
          css={(theme) => ({
            margin: theme.spacing(0, 2),
          })}
        />
        <div css={{ flexGrow: 1 }} />
        <div
          css={(theme) => ({
            display: "flex",
            gap: theme.spacing(1),
            lineHeight: 1,
          })}
        >
          <img
            src={withPrefix("/csm-seal.png")}
            alt="scm"
            width={64}
            loading="lazy"
            decoding="async"
          />
          <img
            src={withPrefix("/riss-seal.png")}
            alt="riss"
            width={64}
            loading="lazy"
            decoding="async"
          />
        </div>
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
                <SocialLinks links={links} />
              </>
            }
          />
        </Card>
      </Grid>
    </Grid>
  );
};
