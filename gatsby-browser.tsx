import type { GatsbyBrowser } from "gatsby";

import { WrapPageElement } from "@/layouts/WrapPageElement";
import { WrapRootElement } from "@/layouts/WrapRootElement";
import { isDefined } from "@/utils/typeguard";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <WrapRootElement>{element}</WrapRootElement>;

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <WrapPageElement>{element}</WrapPageElement>;

export const onRouteUpdate: GatsbyBrowser["onRouteUpdate"] = ({ location }) => {
  if (isDefined(location.hash)) {
    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (isDefined(element)) {
      element.scrollIntoView();
    }
  }
};
