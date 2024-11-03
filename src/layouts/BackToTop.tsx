import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import Fab from "@mui/material/Fab";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { TRANSLATION } from "@/constants/TRANSLATION";

export const BackToTop = (): React.JSX.Element => {
  const isShow = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleClick = (): void => {
    window.scrollTo({ top: 0 });
  };

  return (
    <Fade in={isShow}>
      <Fab
        size="medium"
        variant="circular"
        title={TRANSLATION.scrollToTop.title}
        aria-label={TRANSLATION.scrollToTop.title}
        onClick={handleClick}
        css={(theme) => ({
          position: "fixed",
          bottom: theme.spacing(3),
          marginBottom: `env(safe-area-inset-bottom, 0px)`,
          right: theme.spacing(3),
          zIndex: theme.zIndex.tooltip,
          border: `1px solid ${theme.vars.palette.divider}`,
          borderRadius: theme.spacing(2),
          color: theme.vars.palette.text.secondary,
          backgroundColor: theme.vars.palette.background.paper,
          [theme.getColorSchemeSelector("dark")]: {
            border: `1px solid ${theme.vars.palette.common.white}`,
            color: theme.vars.palette.text.primary,
          },
          "&:hover": {
            backgroundColor: theme.vars.palette.background.paper,
          },
        })}
      >
        <KeyboardArrowUpIcon color="inherit" fontSize="medium" />
      </Fab>
    </Fade>
  );
};

export default BackToTop;
