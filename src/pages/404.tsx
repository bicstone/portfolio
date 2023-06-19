import SelfImprovementIcon from "@mui/icons-material/SelfImprovementRounded";
import Box from "@mui/material/Box";
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
      <Box sx={{ margin: 2, textAlign: "center" }}>
        {/* 見つかりませんでした */}
        <SelfImprovementIcon
          color="primary"
          sx={(theme) => ({
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
      </Box>
      <Box sx={{ margin: 2, textAlign: "center" }}>
        <Button
          component={RouterLink}
          variant="contained"
          to="/"
          color="secondary"
          sx={{ marginRight: 2 }}
        >
          {TRANSLATION.notFound.backToTimeline}
        </Button>
        <Button
          component={RouterLink}
          variant="outlined"
          to="/"
          color="secondary"
        ></Button>
      </Box>
    </Container>
  );
};

export default NotFound;
