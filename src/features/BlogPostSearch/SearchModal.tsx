import SearchIcon from "@mui/icons-material/Search";
import {
  List,
  ListItemText,
  TextField,
  InputAdornment,
  ListItemButton,
  Button,
  DialogTitle,
  Divider,
  ListItem,
  Alert,
} from "@mui/material";
import { Link as RouterLink } from "gatsby";
import { useI18next } from "gatsby-plugin-react-i18next";
import { useState, useMemo, useTransition, useId } from "react";

import { useSearch } from "./useSearch";

import type Fuse from "fuse.js";
import type { ChangeEvent } from "react";

import {
  convertHiraganaToKatakana,
  convertKatakanaToHiragana,
} from "@/utils/convert";
import { isDefined } from "@/utils/typeguard";

export interface SearchModalProps {
  onClose: () => void;
}

export const SearchModal = ({ onClose }: SearchModalProps): JSX.Element => {
  const { t } = useI18next();
  const [filtering, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [inputValueSync, setInputValueSync] = useState("");
  const listId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValueSync(value);
    startTransition(() => {
      setInputValue(value);
    });
  };

  const keyword: Fuse.Expression = useMemo(() => {
    // TODO: Incorrect typescript type inference
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
        width: 600,
        maxWidth: "100%",
        height: 500,
        maxHeight: "100%",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <DialogTitle css={{ display: "flex", justifyContent: "space-between" }}>
        {t("search.title")}
        <Button
          css={(theme) => ({
            border: `1px solid ${theme.vars.palette.divider}`,
            padding: theme.spacing(0, 1.5),
            minWidth: 0,
          })}
          color="inherit"
          variant="outlined"
          title={t("search.close.hint")}
          onClick={onClose}
        >
          {t("search.close.title")}
        </Button>
      </DialogTitle>
      <TextField
        // eslint-disable-next-line jsx-a11y/no-autofocus -- for modal focus
        autoFocus
        fullWidth
        type="search"
        placeholder={t("search.hint")}
        value={inputValueSync}
        margin="dense"
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
          enterKeyHint: t("search.title"),
        }}
        onChange={handleChange}
        css={(theme) => ({ padding: theme.spacing(0, 3) })}
      />
      <Divider css={(theme) => ({ margin: theme.spacing(2, -3, 0, -3) })} />
      <List
        role="listbox"
        id={listId}
        dense
        css={{ overflowY: "auto" }}
        aria-busy={fetching || filtering}
      >
        {error && <Alert severity="error">{t("search.error")}</Alert>}
        {isDefined(result) &&
          result.map((post) => (
            <ListItem key={post.refIndex} role="option">
              <ListItemButton component={RouterLink} to={`/${post.item.slug}`}>
                <ListItemText primary={post.item.title} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </div>
  );
};
