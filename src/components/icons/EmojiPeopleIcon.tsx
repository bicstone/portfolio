import styled from "@emotion/styled";

import { IconBase } from "./IconBase";

import icon from "@/content/icons/EmojiPeopleIcon.svg";
import whiteIcon from "@/content/icons/EmojiPeopleWhiteIcon.svg";

export const EmojiPeopleIcon = styled(IconBase)(({ theme }) => ({
  content: `url(${icon})`,
  [theme.getColorSchemeSelector("dark")]: {
    content: `url(${whiteIcon})`,
  },
}));
