import {
  UnfoldMore as UnfoldMoreIcon,
  UnfoldLess as UnfoldLessIcon,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";

export const PortfolioProjectBulkExpandButton = (props: {
  expanded: boolean;
  onClick: () => void;
}): JSX.Element => {
  const { expanded, onClick } = props;

  const { t } = useI18next();

  return (
    <Button
      css={(theme) => ({
        backgroundColor: theme.vars.palette.background.default,
        "&:hover": {
          backgroundColor: theme.vars.palette.background.default,
        },
      })}
      variant="outlined"
      color="secondary"
      size="small"
      endIcon={expanded ? <UnfoldLessIcon /> : <UnfoldMoreIcon />}
      onClick={onClick}
      aria-label={t("home.projects.all-expand.hint")}
    >
      {expanded
        ? t("home.projects.label.all-less")
        : t("home.projects.label.all-more")}
    </Button>
  );
};
