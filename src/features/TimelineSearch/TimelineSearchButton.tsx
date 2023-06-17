import SearchIcon from "@mui/icons-material/SearchRounded";
import { IconButton } from "@mui/material";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useCallback, Suspense, lazy } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useHotkeys } from "react-hotkeys-hook";

import { TRANSLATION } from "@/constants/TRANSLATION";
import { useTheme } from "@/layouts/themes/useTheme";

const SearchModal = lazy(async () => await import("./TimelineSearchModal"));

export const TimelineSearchButton = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useHotkeys("ctrl+k,command+k,/", (event) => {
    event.preventDefault();
    handleOpen();
  });

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <IconButton
        size="small"
        title={TRANSLATION.search.button.hint}
        onClick={handleOpen}
      >
        <SearchIcon />
      </IconButton>
      {isOpen &&
        createPortal(
          <ErrorBoundary
            fallback={
              <Backdrop
                open
                css={(theme) => ({ zIndex: theme.zIndex.modal })}
                onClick={handleClose}
              >
                <Alert severity="error">{TRANSLATION.search.error}</Alert>
              </Backdrop>
            }
          >
            <Suspense
              fallback={
                <Backdrop
                  open
                  css={(theme) => ({
                    color: theme.vars.palette.common.white,
                    zIndex: theme.zIndex.modal,
                  })}
                  aria-busy="true"
                  onClick={handleClose}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              }
            >
              <Dialog open onClose={handleClose} fullScreen={mobile}>
                <SearchModal onClose={handleClose} />
              </Dialog>
            </Suspense>
          </ErrorBoundary>,
          document.body
        )}
    </>
  );
};
