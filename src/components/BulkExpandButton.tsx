import {
  UnfoldMore as UnfoldMoreIcon,
  UnfoldLess as UnfoldLessIcon,
} from "@mui/icons-material";
import { Button } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";

export const BulkExpandButton = (props: {
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
      aria-label={t("bulk-expand-button.hint")}
    >
      {expanded
        ? t("bulk-expand-button.label.all-less")
        : t("bulk-expand-button.label.all-more")}
    </Button>
  );
};
