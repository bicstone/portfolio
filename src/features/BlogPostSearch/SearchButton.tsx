import SearchIcon from "@mui/icons-material/Search";
import { Button, Dialog, useTheme, useMediaQuery } from "@mui/material";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { useHotkeys } from "react-hotkeys-hook";

import { SearchModal } from "./SearchModal";

export const SearchButton = (props: { isExpanded: boolean }): JSX.Element => {
  const { t } = useI18next();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useHotkeys("ctrl+k,/", (event) => {
    event.preventDefault();
    handleOpen();
  });

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Button
        css={(theme) => ({
          backgroundColor: theme.vars.palette.background.default,
          marginRight: theme.spacing(0.5),
        })}
        variant="outlined"
        color="inherit"
        size="small"
        title={t("search.button.hint")}
        onClick={handleOpen}
        startIcon={props.isExpanded ? <SearchIcon /> : undefined}
      >
        {props.isExpanded ? t("search.button.title") : <SearchIcon />}
      </Button>
      {isOpen &&
        createPortal(
          <Dialog onClose={handleClose} open={isOpen} fullScreen={fullScreen}>
            <SearchModal onClose={handleClose} />
          </Dialog>,
          document.body
        )}
    </>
  );
};
