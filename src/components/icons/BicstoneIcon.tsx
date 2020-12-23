import React from 'react';
import parse, {
  attributesToProps,
  domToReact,
  HTMLReactParserOptions,
  DOMNode,
} from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { BicstoneIconDataQuery } from '../../types';

// HACK: html-react-parserが使っているdomhandlerはv3だが、
// 他のライブラリの影響でnode_modulesではv4になっている。
// こちらから読むとv4でinstanceofがtrueにならないため、直接参照する。
// 時間があるときに、他にいい方法がないか調べる。
import { Element } from '../../../node_modules/html-dom-parser/node_modules/domhandler/lib';

type Props = {
  width: number;
  height: number;
};

export const BicstoneIcon: React.FC<Props> = ({ width, height }) => {
  // アイコンはMITにできないため、contentfulから持ってくる形にする
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
  // `5qVePilXXNs2WxxIcvndga`は、contentful assetsのアイコンのID
  const { contentfulAsset }: BicstoneIconDataQuery = useStaticQuery(
    graphql`
      query BicstoneIconData {
        contentfulAsset(contentful_id: { eq: "5qVePilXXNs2WxxIcvndga" }) {
          svg {
            content
          }
        }
      }
    `,
  );
  return <>{parse(contentfulAsset?.svg?.content || '', options)}</>;
};
