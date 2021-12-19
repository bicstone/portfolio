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
  wrapProps?: React.ComponentPropsWithRef<'span'>;
}

/**
 * Contentfulから持ってきたSVGアイコンをsvgタグに出力する
 * ※ビックストーンアイコンはMITにできないため、contentfulから持ってくるときに使用
 */
export const SvgIcon = ({ width, height, icon, alt, wrapProps, ...props }: SvgIconProps) => {
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if ('name' in domNode && domNode.name === 'svg' && 'attribs' in domNode && domNode.attribs) {
        return (
          <svg
            {...attributesToProps(domNode.attribs)}
            width={width}
            height={height}
            css={{ width: width, height: height }}
            {...props}
          >
            {domToReact(domNode.children as DOMNode[])}
          </svg>
        );
      }
    },
  };
  return (
    <span role="img" aria-label={alt || ''} title={alt || ''} {...wrapProps}>
      {parse(icon || '', options)}
    </span>
  );
};

SvgIcon.displayName = 'SvgIcon';
