import { getInitColorSchemeScript } from "@mui/material/styles";
import { Fragment } from "react";

import siteMetaData from "./src/constants/siteMetaData";

import type { GatsbySSR } from "gatsby";

import { WrapRootElement } from "@/layouts/WrapRootElement";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
  setPreBodyComponents,
}) => {
  setHtmlAttributes({ lang: siteMetaData.defaultLanguage });

  setPreBodyComponents([
    <Fragment key="init-color-scheme-script">
      {getInitColorSchemeScript({
        enableSystem: true,
      })}
    </Fragment>,
  ]);
};

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};
