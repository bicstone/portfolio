import React from 'react';

import parse, {
  attributesToProps,
  domToReact,
  HTMLReactParserOptions,
  DOMNode,
} from 'html-react-parser';

export interface SvgIconProps extends React.ComponentPropsWithRef<'svg'> {
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
            aria-label={alt || ''}
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
  return <> {parse(icon || '', options)} </>;
};

SvgIcon.displayName = 'SvgIcon';
