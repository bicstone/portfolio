import Avatar from "@mui/material/Avatar";
import SvgIcon from "@mui/material/SvgIcon";
import parse from "html-react-parser";
import { memo } from "react";

import type { ComponentProps } from "react";

export interface SvgAvatarProps {
  name?: string;
  svg: string;
}

/**
 * Contentfulから持ってきたpath集合をavatarとして出力する
 * ※svgをcontentfulから持ってくるときに使用
 * XXX: contentfulからmediaで返したほうが良かった
 */
export const SvgAvatar = memo<ComponentProps<typeof Avatar> & SvgAvatarProps>(
  ({ name, svg, ...props }) => {
    return (
      <Avatar role="img" aria-label={name} title={name} {...props}>
        <SvgIcon>{parse(svg)}</SvgIcon>
      </Avatar>
    );
  }
);

SvgAvatar.displayName = "SvgAvatar";
