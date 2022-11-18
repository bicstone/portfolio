import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/SearchRounded";
import { Button, Dialog, useMediaQuery } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useHotkeys } from "react-hotkeys-hook";

import { SearchModal } from "./SearchModal";

import { CONSOLE_FONT_FAMILY } from "@/components/markdown/constants";
import { useTheme } from "@/hooks/useTheme";

const ShortcutKey = styled("div")(({ theme }) => ({
  fontFamily: CONSOLE_FONT_FAMILY,
  lineHeight: 1,
  color: theme.vars.palette.text.secondary,
  "&&&": {
    // "&&&" for override endIcon styles
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const SearchButton = (props: { isExpanded: boolean }): JSX.Element => {
  const { isExpanded } = props;

  const { t } = useI18next();
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
          backgroundColor: theme.vars.palette.background.default,
          marginRight: theme.spacing(0.5),
          "&:hover": {
            backgroundColor: theme.vars.palette.background.default,
          },
        })}
        variant="outlined"
        color="secondary"
        size="small"
        title={t("search.button.hint")}
        onClick={handleOpen}
        startIcon={isExpanded ? <SearchIcon /> : undefined}
        endIcon={isExpanded ? <ShortcutKey>Ctrl+K</ShortcutKey> : undefined}
      >
        {isExpanded ? t("search.button.title") : <SearchIcon />}
      </Button>
      {isOpen &&
        createPortal(
          <Dialog onClose={handleClose} open={isOpen} fullScreen={mobile}>
            <SearchModal onClose={handleClose} />
          </Dialog>,
          document.body
        )}
    </>
  );
};
