import React from 'react';
import parse, {
  attributesToProps,
  domToReact,
  HTMLReactParserOptions,
  DOMNode,
} from 'html-react-parser';
import { Element } from 'domhandler';
import { Box } from '@material-ui/core';

export type SvgIconProps = {
  width: number;
  height: number;
  icon: string;
  alt: string;
};

/**
 * Contentfulから持ってきたSVGアイコンをsvgタグに出力する
 * ※ビックストーンアイコンはMITにできないため、contentfulから持ってくるときに使用
 */
export const SvgIcon = React.memo<SvgIconProps>(({ width, height, icon, alt }) => {
  const options: HTMLReactParserOptions = {
    replace: domNode => {
      if (
        domNode instanceof Element &&
        domNode.attribs &&
        domNode.name === 'svg' &&
        domNode.children
      ) {
        const props = attributesToProps(domNode.attribs);
        return (
          <svg {...props} width={width} height={height}>
            {domToReact(domNode.children as DOMNode[])}
          </svg>
        );
      }
    },
  };
  return (
    <Box component="div" display="flex" role="img" aria-label={alt || ''} title={alt || ''}>
      {parse(icon || '', options)}
    </Box>
  );
});
