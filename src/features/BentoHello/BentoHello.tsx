import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "gatsby";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const BentoHello = (): JSX.Element => {
  return (
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
            <Typography variant="body2" color="text.secondary" gutterBottom>
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
  );
};
