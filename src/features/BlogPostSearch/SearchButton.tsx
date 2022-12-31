import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/SearchRounded";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";
import Button, { buttonClasses } from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useCallback, Suspense, lazy } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { useHotkeys } from "react-hotkeys-hook";

import { CONSOLE_FONT_FAMILY } from "@/components/markdown/constants";
import { TRANSLATION } from "@/constants/TRANSLATION";
import { useTheme } from "@/hooks/useTheme";

const SearchModal = lazy(async () => await import("./SearchModal"));

const ShortcutKey = styled("div")(({ theme }) => ({
  fontFamily: CONSOLE_FONT_FAMILY,
  fontWeight: "bold",
  lineHeight: 1,
  "&&&": {
    // "&&&" for override endIcon styles
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const SearchButton = (): JSX.Element => {
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
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Button
        css={(theme) => ({
          backgroundColor: theme.vars.palette.secondary.main,
          marginRight: theme.spacing(0.5),
          "&:hover": {
            backgroundColor: theme.vars.palette.secondary.main,
          },
          [theme.breakpoints.down("sm")]: {
            [`& .${buttonClasses.startIcon}`]: {
              display: "none",
            },
            [`& .${buttonClasses.endIcon}`]: {
              display: "none",
            },
          },
        })}
        variant="contained"
        color="secondary"
        size="small"
        title={TRANSLATION.search.button.hint}
        onClick={handleOpen}
        startIcon={<SearchIcon />}
        endIcon={<ShortcutKey>/</ShortcutKey>}
      >
        <>
          <span
            css={(theme) => ({
              display: "inline",
              [theme.breakpoints.down("sm")]: {
                display: "none",
              },
            })}
          >
            {TRANSLATION.search.button.title}
          </span>
          <SearchIcon
            css={(theme) => ({
              display: "none",
              [theme.breakpoints.down("sm")]: {
                display: "inline-block",
              },
            })}
          />
        </>
      </Button>
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
