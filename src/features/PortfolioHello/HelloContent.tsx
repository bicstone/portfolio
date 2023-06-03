import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { graphql } from "gatsby";
import { useState } from "react";

import { FukkiretaAnimationSvgIcon } from "./FukkiretaAnimationSvgIcon";
import { SocialLinks } from "./SocialLinks";

import type { PortfolioHelloContentFragment } from "@/generated/graphqlTypes";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const query = graphql`
  fragment PortfolioHelloContent on ContentfulHello {
    ...SocialLinks
  }
`;

export const HelloContent = (props: {
  links: readonly PortfolioHelloContentFragment[];
}): JSX.Element => {
  const { links } = props;

  const [activeAnimation, setActiveAnimation] = useState<boolean>(false);

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={3} md={2} css={{ textAlign: "center" }}>
        <FukkiretaAnimationSvgIcon
          activeAnimation={activeAnimation}
          width={100}
          height={100}
          src={`${SITE_METADATA.siteUrl}${SITE_METADATA.imageAvatar}`}
          loading="eager"
          decoding="async"
          alt={
            activeAnimation
              ? TRANSLATION.hello.icon.fukkireta
              : TRANSLATION.hello.icon.normal
          }
          onClick={() => {
            setActiveAnimation(!activeAnimation);
          }}
          css={(theme) => ({
            margin: theme.spacing(0, 2),
          })}
        />
      </Grid>
      <Grid item xs={12} sm={9} md={10}>
        <Card variant="elevation">
          <CardHeader
            disableTypography
            title={
              <Typography component="p" variant="h6" gutterBottom>
                {TRANSLATION.hello.title}
              </Typography>
            }
            subheader={
              <>
                <Typography variant="body1" gutterBottom>
                  {TRANSLATION.hello.description}
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
