import React from 'react';
import parse from 'html-react-parser';
import { Avatar, SvgIcon } from '@material-ui/core';

export type SvgAvatarProps = {
  name: string;
  svg: string;
};

/**
 * Contentfulから持ってきたpath集合をavatarとして出力する
 * ※svgをcontentfulから持ってくるときに使用
 * TODO: contentfulからmediaで返したほうが良かった
 */
export const SvgAvatar = React.memo<React.ComponentProps<typeof Avatar> & SvgAvatarProps>(
  ({ name, svg, ...props }) => {
    return (
      <Avatar role="img" aria-label={name} title={name} {...props}>
        <SvgIcon>{parse(svg)}</SvgIcon>
      </Avatar>
    );
  },
);

SvgAvatar.displayName = 'SvgAvatar';
