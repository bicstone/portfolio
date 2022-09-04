import type { GatsbyBrowser } from "gatsby";

import { WrapRootElement } from "@/layouts/WrapRootElement";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <WrapRootElement>{element}</WrapRootElement>;
};
