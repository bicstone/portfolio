import SelfImprovementIcon from "@mui/icons-material/SelfImprovementRounded";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import type { HeadFC } from "gatsby";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const Head: HeadFC = () => {
  return (
    <>
      <meta name="robots" content="noindex,follow" />
      <meta name="googlebot" content="noindex,follow" />
    </>
  );
};

const NotFound = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <div css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}>
        {/* 見つかりませんでした */}
        <SelfImprovementIcon
          color="primary"
          css={(theme) => ({
            width: theme.spacing(20),
            height: theme.spacing(20),
          })}
        />
        <Typography variant="h4" component="h1" paragraph>
          {TRANSLATION.notFound.title}
        </Typography>
        <Typography variant="body1">
          {TRANSLATION.notFound.description}
        </Typography>
      </div>
      <div css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}>
        <Button
          component={RouterLink}
          variant="contained"
          to="/"
          color="secondary"
          css={(theme) => ({ marginRight: theme.spacing(2) })}
        >
          {TRANSLATION.notFound.backToTimeline}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
