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
          // background.paper はページ背景 (background.default) と同色のため、
          // surfaceTint を重ねた surfaceContainer 相当の色で背景から浮かせる
          border: `1px solid color-mix(in srgb, ${theme.vars.palette.outline} 40%, transparent)`,
          borderRadius: theme.spacing(2),
          color: theme.vars.palette.onSurfaceVariant.main,
          backgroundColor: theme.vars.palette.surface.main,
          backgroundImage: `linear-gradient(rgba(${theme.vars.palette.primary.mainChannel} / 0.08), rgba(${theme.vars.palette.primary.mainChannel} / 0.08))`,
          "&:hover": {
            backgroundColor: theme.vars.palette.surface.main,
          },
        })}
      >
        <KeyboardArrowUpIcon color="inherit" fontSize="medium" />
      </Fab>
    </Fade>
  );
};

export default BackToTop;
