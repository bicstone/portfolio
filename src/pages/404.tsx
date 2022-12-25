import { SelfImprovementRounded as SelfImprovementIcon } from "@mui/icons-material";
import { Typography, Container, Button } from "@mui/material";
import { Link as RouterLink } from "gatsby";

import { TRANSLATION } from "@/constants/TRANSLATION";
import { Head } from "@/layouts/Head";

export { Head };

const NotFound = (): JSX.Element => {
  return (
    <Container maxWidth="md">
      <div css={(theme) => ({ margin: theme.spacing(2), textAlign: "center" })}>
        {/* 見つかりませんでした */}
        <SelfImprovementIcon
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
        >
          {TRANSLATION.notFound.backToHome}
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
