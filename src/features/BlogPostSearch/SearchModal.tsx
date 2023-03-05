import SearchIcon from "@mui/icons-material/SearchRounded";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link as RouterLink } from "gatsby";
import { useState, useMemo, useTransition, useId } from "react";
import { Virtuoso } from "react-virtuoso";

import { useSearch } from "./useSearch";

import type Fuse from "fuse.js";
import type { ChangeEvent } from "react";

import { TRANSLATION } from "@/constants/TRANSLATION";
import { useTheme } from "@/hooks/useTheme";
import {
  convertHiraganaToKatakana,
  convertKatakanaToHiragana,
} from "@/utils/convert";
import { isDefined } from "@/utils/typeguard";

export const SearchModal = (props: { onClose: () => void }): JSX.Element => {
  const { onClose } = props;

  const [filtering, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [inputValueSync, setInputValueSync] = useState("");
  const listId = useId();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValueSync(value);
    startTransition(() => {
      setInputValue(value);
    });
  };

  const keyword: Fuse.Expression = useMemo(() => {
    // Incorrect typescript type inference
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      $or: [
        { title: inputValue },
        { excerpt: inputValue },
        { title: convertKatakanaToHiragana(inputValue) },
        { excerpt: convertKatakanaToHiragana(inputValue) },
        { title: convertHiraganaToKatakana(inputValue) },
        { excerpt: convertHiraganaToKatakana(inputValue) },
      ],
    } as { $or: Array<Record<string, string>> };
  }, [inputValue]);

  const { result, fetching, error } = useSearch({
    keyword,
  });

  return (
    <div
      css={{
        width: mobile ? "100%" : 600,
        maxWidth: "100%",
        height: mobile ? "100%" : 500,
        maxHeight: "100%",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <DialogTitle
        css={{
          display: "flex",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        {TRANSLATION.search.title}
        <Button
          css={(theme) => ({
            padding: theme.spacing(0, 1.5),
            minWidth: 0,
          })}
          color="secondary"
          variant="contained"
          title={TRANSLATION.search.close.hint}
          onClick={onClose}
        >
          {TRANSLATION.search.close.title}
        </Button>
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
          enterKeyHint: TRANSLATION.search.title,
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
        aria-busy={fetching || filtering}
      >
        {error && <Alert severity="error">{TRANSLATION.search.error}</Alert>}
        {isDefined(result) && !fetching ? (
          <Virtuoso
            data={result}
            itemContent={(_index, post) => (
              <ListItem key={post.refIndex} role="option">
                <ListItemButton
                  component={RouterLink}
                  to={`/${post.item.slug}`}
                  onClick={onClose}
                >
                  <ListItemText primary={post.item.title} />
                </ListItemButton>
              </ListItem>
            )}
            overscan={{ main: 50, reverse: 50 }}
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
  );
};

// for React.lazy
export default SearchModal;
