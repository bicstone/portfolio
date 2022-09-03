import parse, { attributesToProps, domToReact } from "html-react-parser";

import type { HTMLReactParserOptions, DOMNode } from "html-react-parser";
import type { ComponentPropsWithRef } from "react";

export interface SvgIconProps extends ComponentPropsWithRef<"svg"> {
  width: number;
  height: number;
  icon: string;
  alt: string;
}

/**
 * Contentfulから持ってきたSVGアイコンをsvgタグに出力する
 * ※ビックストーンアイコンはMITにできないため、contentfulから持ってくるときに使用
 */
export const SvgIcon = ({
  width,
  height,
  icon,
  alt,
  ...props
}: SvgIconProps): JSX.Element => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if ("name" in domNode && domNode.name === "svg" && "attribs" in domNode) {
        return (
          <svg
            {...attributesToProps(domNode.attribs)}
            aria-label={alt}
            width={width}
            height={height}
            css={{ width, height }}
            {...props}
          >
            {domToReact(domNode.children as DOMNode[])}
          </svg>
        );
      }
    },
  };
  return <> {parse(icon, options)} </>;
};

SvgIcon.displayName = "SvgIcon";
