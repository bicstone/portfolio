import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";
import { useState } from "react";

import { FukkiretaAnimationSvgIcon } from "./FukkiretaAnimationSvgIcon";

import { SITE_METADATA } from "@/constants/SITE_METADATA";
import { TRANSLATION } from "@/constants/TRANSLATION";

export const HelloContent = (): JSX.Element => {
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
        <Card>
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
                <Link
                  color="secondary"
                  component={RouterLink}
                  to="/me"
                  underline="hover"
                >
                  もっと知りたい
                </Link>
              </>
            }
          />
        </Card>
      </Grid>
    </Grid>
  );
};
