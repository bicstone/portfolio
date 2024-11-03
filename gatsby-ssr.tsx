import { getInitColorSchemeScript } from "@mui/material/styles/CssVarsProvider";
import { Fragment } from "react";

import { SITE_METADATA } from "./src/constants/SITE_METADATA";

import type { GatsbySSR } from "gatsby";

import { WrapPageElement } from "@/layouts/WrapPageElement";
import { WrapRootElement } from "@/layouts/WrapRootElement";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setPreBodyComponents,
}) => {
  setHtmlAttributes({ lang: SITE_METADATA.defaultLanguage });

  setPreBodyComponents([
    <Fragment key="init-color-scheme-script">
      {getInitColorSchemeScript({
        defaultMode: "light",
        modeStorageKey: "mui-mode-disabled",
      })}
    </Fragment>,
  ]);
};

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => <WrapRootElement>{element}</WrapRootElement>;

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => <WrapPageElement>{element}</WrapPageElement>;
