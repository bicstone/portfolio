import CloseIcon from "@mui/icons-material/CloseRounded";
import SearchIcon from "@mui/icons-material/SearchRounded";
import Dialog, { dialogClasses } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useTransition, useId } from "react";
import { Virtuoso } from "react-virtuoso";

import { useTimelineSearch } from "./useTimelineSearch";

import type { Expression } from "fuse.js";
import type { ChangeEvent } from "react";

import { TRANSLATION } from "@/constants/TRANSLATION";
import {
  convertHiraganaToKatakana,
  convertKatakanaToHiragana,
} from "@/utils/convert";
import { isDefined } from "@/utils/typeguard";

export const TimelineSearchModal = (props: {
  onClose: () => void;
}): JSX.Element => {
  const { onClose } = props;

  const [filtering, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [inputValueSync, setInputValueSync] = useState("");
  const listId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const {value} = event.target;
    setInputValueSync(value);
    startTransition(() => {
      setInputValue(value);
    });
  };

  const keyword: Expression = {
    $or: [
      { title: inputValue },
      { excerpt: inputValue },
      { slug: inputValue },
      { url: inputValue },
      { title: convertKatakanaToHiragana(inputValue) },
      { excerpt: convertKatakanaToHiragana(inputValue) },
      { title: convertHiraganaToKatakana(inputValue) },
      { excerpt: convertHiraganaToKatakana(inputValue) },
    ],
  };

  const { result } = useTimelineSearch({ keyword });

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open
      onClose={onClose}
      fullScreen={mobile}
      css={(theme) => ({
        [`& .${dialogClasses.paper}`]: {
          background: theme.vars.palette.background.paper,
          [theme.getColorSchemeSelector("dark")]: {
            background: theme.vars.palette.background.paper,
          },
        },
      })}
    >
      <div
        css={(theme) => ({
          width: 600,
          maxWidth: "100%",
          height: 500,
          maxHeight: "100%",
          display: "flex",
          overflow: "hidden",
          flexDirection: "column",
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            height: "100%",
          },
        })}
      >
        <DialogTitle
          css={{
            display: "flex",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          {TRANSLATION.search.title}
          <IconButton
            size="small"
            title={TRANSLATION.search.close.hint}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <TextField
          // eslint-disable-next-line jsx-a11y/no-autofocus -- for modal focus
          autoFocus
          fullWidth
          type="search"
          placeholder={TRANSLATION.search.hint}
          value={inputValueSync}
          margin="dense"
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          inputProps={{
            autoComplete: "off",
            "aria-controls": listId,
            enterKeyHint: "search",
          }}
          onChange={handleChange}
          css={(theme) => ({ padding: theme.spacing(0, 3), flexShrink: 0 })}
        />
        <Divider
          css={(theme) => ({
            margin: theme.spacing(2, -3, 0, -3),
            flexShrink: 0,
          })}
        />
        <List
          role="listbox"
          id={listId}
          dense
          css={{ overflowY: "auto", flexGrow: 1 }}
          aria-busy={filtering}
        >
          {isDefined(result) ? (
            <Virtuoso
              data={result}
              itemContent={(_index, post) => (
                <ListItem key={post.refIndex} role="option">
                  <ListItemButton href={post.item.url}>
                    <ListItemText primary={post.item.title} />
                  </ListItemButton>
                </ListItem>
              )}
              tabIndex={-1}
              style={{ height: "100%" }}
            />
          ) : (
            [...Array(5)].map((_, index) => (
              <ListItem key={index} role="option">
                <ListItemButton disabled>
                  <Skeleton
                    sx={(theme) => ({
                      margin: theme.spacing(0.5, 0),
                      width: "100%",
                      ...theme.typography.body2,
                    })}
                  />
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </div>
    </Dialog>
  );
};

// for React.lazy
export default TimelineSearchModal;
