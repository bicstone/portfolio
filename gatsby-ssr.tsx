import { getInitColorSchemeScript } from "@mui/material/styles";
import { Fragment } from "react";

import type { GatsbySSR } from "gatsby";

import { WrapRootElement } from "@/layouts/WrapRootElement";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPreBodyComponents,
}) => {
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
