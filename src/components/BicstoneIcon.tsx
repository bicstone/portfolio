import React from 'react';
import parse, { attributesToProps, domToReact, HTMLReactParserOptions } from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { BicstoneIconDataQuery } from '../types/graphqlTypes';

export type Props = {
  width: number;
  height: number;
};

const BicstoneIcon: React.FC<Props> = ({ width, height }) => {
  // HACK: アイコンはMITにできないため、contentfulから持ってくる形にする
  // parserを使うとdomをreactに変換される際にpropsを追加で渡すことが可能(超便利だけどXSS注意)
  const options: HTMLReactParserOptions = {
    replace: ({ attribs, name, children }) => {
      if (attribs && name === 'svg' && children) {
        const props = attributesToProps(attribs);
        return (
          <svg {...props} width={width} height={height}>
            {domToReact(children)}
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
  return <>{contentfulAsset?.svg?.content && parse(contentfulAsset.svg.content, options)}</>;
};

export default BicstoneIcon;
