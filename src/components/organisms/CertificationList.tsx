import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import { CollapseResponsiveController } from "src/components";

import type { Breakpoint } from "@mui/material/styles";
import type { IndexPageQuery } from "src/types";

export interface CertificationListProps {
  certification: IndexPageQuery["certification"]["edges"];
}

/**
 * 資格一覧
 */
export const CertificationList = ({
  certification,
}: CertificationListProps): JSX.Element => {
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ["lg", "xl", "md"];

  return (
    <Grid container spacing={2}>
      {certification
        .filter(({ node }) => node.node_locale === language)
        .map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
            <CollapseResponsiveController
              defaultExpanded={node.expanded}
              defaultExpandedBreakpoints={defaultExpandedBreakpoints}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${node.id}-content`}
                  id={`${node.id}-header`}
                >
                  <Typography component="h2" variant="h6">
                    {node.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense>
                    {node.qualifications.map((qualification) => (
                      <ListItem key={qualification.id}>
                        <ListItemText
                          primary={qualification.name}
                          secondary={qualification.date}
                        />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </CollapseResponsiveController>
          </Grid>
        ))}
    </Grid>
  );
};
