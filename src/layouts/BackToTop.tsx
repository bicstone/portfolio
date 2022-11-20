import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { Tooltip, Fade, Fab, useScrollTrigger } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useCallback, useState } from "react";

export const BackToTop = (): JSX.Element => {
  const { t } = useI18next();
  const [isOpen, setOpen] = useState(false);

  const isShow = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClose = useCallback((): void => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback((): void => {
    setOpen(true);
  }, []);

  const handleClick = useCallback((): void => {
    window.scrollTo({ top: 0 });
    setOpen(false);
  }, []);

  return (
    <Fade in={isShow}>
      <Tooltip
        title={t("scrollToTop.title")}
        open={isOpen}
        onClose={handleClose}
        onOpen={handleOpen}
      >
        <Fab
          size="medium"
          variant="circular"
          aria-label={t("scrollToTop.title")}
          onClick={handleClick}
          css={(theme) => ({
            position: "fixed",
            bottom: `calc(${theme.spacing(3)}+env(safe-area-inset-bottom,0px))`,
            right: theme.spacing(3),
            zIndex: theme.zIndex.tooltip,
            border: `1px solid ${
              theme.palette.mode === "dark"
                ? theme.vars.palette.common.white
                : theme.vars.palette.divider
            }`,
            borderRadius: theme.spacing(2),
            color:
              theme.palette.mode === "dark"
                ? theme.vars.palette.text.primary
                : theme.vars.palette.text.secondary,
            backgroundColor: theme.vars.palette.background.paper,
            "&:hover": {
              backgroundColor: theme.vars.palette.background.paper,
            },
          })}
        >
          <KeyboardArrowUpIcon color="inherit" fontSize="medium" />
        </Fab>
      </Tooltip>
    </Fade>
  );
};