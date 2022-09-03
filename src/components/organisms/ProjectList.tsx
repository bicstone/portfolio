import { MDXProvider, MDXProviderComponentsProp } from "@mdx-js/react";
import {
  ExpandMore as ExpandMoreIcon,
  UnfoldMore as UnfoldMoreIcon,
  UnfoldLess as UnfoldLessIcon,
} from "@mui/icons-material";
import {
  Typography,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Button,
  useTheme,
  Link,
} from "@mui/material";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { useI18next } from "gatsby-plugin-react-i18next";
import React from "react";
import { SvgAvatar } from "src/components";
import { IndexPageQuery } from "src/types";

export interface ProjectListProps {
  projects: IndexPageQuery["projects"]["edges"];
}

const components: MDXProviderComponentsProp = {
  a: (props) => (
    <Link
      {...props}
      rel="external noreferrer noopener nofollow"
      target="_blank"
    />
  ),
};

/**
 * プロジェクト一覧
 */
export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const theme = useTheme();
  const { language, t } = useI18next();
  const [expanded, setExpanded] = React.useState<string | boolean>(false);

  const handleChange = (id: string): void => {
    setExpanded(expanded === id ? false : id);
  };

  return (
    <>
      <Typography component="div" align="right" paragraph>
        <Button
          css={{
            backgroundColor: theme.vars.palette.background.default,
            "&:hover": {
              backgroundColor: theme.vars.palette.background.default,
            },
          }}
          variant="outlined"
          color="secondary"
          size="small"
          endIcon={expanded === false ? <UnfoldMoreIcon /> : <UnfoldLessIcon />}
          onClick={() => {
            const isExpanded = expanded !== false;
            return setExpanded(!isExpanded);
          }}
          aria-label={t("home.projects.all-expand.hint")}
        >
          {expanded === false
            ? t("home.projects.label.all-more")
            : t("home.projects.label.all-less")}
        </Button>
      </Typography>
      {projects
        .filter(({ node }) => node.node_locale === language)
        .map(({ node }) => (
          <Accordion
            expanded={expanded === node.id || expanded === true}
            onChange={() => handleChange(node.id)}
            key={node.id}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${node.id}-content`}
              id={`${node.id}-header`}
            >
              <CardHeader
                css={{ padding: 0 }}
                avatar={
                  <SvgAvatar name={node.icon.name} svg={node.icon.svg.svg} />
                }
                title={
                  <>
                    <Typography
                      variant="body2"
                      component="div"
                      color="textSecondary"
                    >
                      {node.startDate}年
                    </Typography>
                    <Typography component="h2" variant="h6">
                      {node.name}
                    </Typography>
                  </>
                }
                subheader={
                  <Typography
                    variant="body2"
                    component="div"
                    role="list"
                    aria-label="tags"
                  >
                    {node.tags.map((tag) => (
                      <Chip
                        variant="outlined"
                        size="small"
                        key={tag.name}
                        label={tag.name}
                        role="listitem"
                      />
                    ))}
                  </Typography>
                }
                disableTypography
              />
            </AccordionSummary>
            <AccordionDetails>
              <>
                <Typography variant="subtitle1" paragraph>
                  {node.subName}
                </Typography>
                <Typography component="div" variant="body2">
                  <MDXProvider components={components}>
                    <MDXRenderer components={components}>
                      {node.detail.childMdx.body}
                    </MDXRenderer>
                  </MDXProvider>
                </Typography>
              </>
            </AccordionDetails>
          </Accordion>
        ))}
    </>
  );
};
