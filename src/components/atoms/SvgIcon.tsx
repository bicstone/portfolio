import React from 'react';

import parse, {
  attributesToProps,
  domToReact,
  HTMLReactParserOptions,
  DOMNode,
} from 'html-react-parser';

export interface SvgIconProps extends React.ComponentPropsWithRef<'span'> {
  width: number;
  height: number;
  icon: string;
  alt: string;
}

/**
 * Contentfulから持ってきたSVGアイコンをsvgタグに出力する
 * ※ビックストーンアイコンはMITにできないため、contentfulから持ってくるときに使用
 */
export const SvgIcon = ({ width, height, icon, alt, ...props }: SvgIconProps) => {
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if ('name' in domNode && domNode.name === 'svg' && 'attribs' in domNode && domNode.attribs) {
        return (
          <svg
            {...attributesToProps(domNode.attribs)}
            width={width}
            height={height}
            css={{ width: width, height: height }}
          >
            {domToReact(domNode.children as DOMNode[])}
          </svg>
        );
      }
    },
  };
  return (
    <span role="img" aria-label={alt || ''} title={alt || ''} {...props}>
      {parse(icon || '', options)}
    </span>
  );
};

SvgIcon.displayName = 'SvgIcon';
