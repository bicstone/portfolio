import { Avatar, SvgIcon } from "@mui/material";
import parse from "html-react-parser";
import React from "react";

export interface SvgAvatarProps {
  name: string;
  svg: string;
}

/**
 * Contentfulから持ってきたpath集合をavatarとして出力する
 * ※svgをcontentfulから持ってくるときに使用
 * XXX: contentfulからmediaで返したほうが良かった
 */
export const SvgAvatar = React.memo<
  React.ComponentProps<typeof Avatar> & SvgAvatarProps
>(({ name, svg, ...props }) => {
  return (
    <Avatar role="img" aria-label={name} title={name} {...props}>
      <SvgIcon>{parse(svg)}</SvgIcon>
    </Avatar>
  );
});

SvgAvatar.displayName = "SvgAvatar";
