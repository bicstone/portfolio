import { languages } from 'src/configs/languages';
import {
  title,
  shortTitle,
  siteUrl,
  description,
  author,
  twitter,
  github,
  image,
  image192,
  firstName,
  lastName,
  gender,
} from 'src/configs/site-meta-data';

const siteMetadata = {
  languages,
  title,
  shortTitle,
  siteUrl,
  description,
  author,
  twitter,
  github,
  image,
  image192,
  firstName,
  lastName,
  gender,
};

/**
 * gatsby 基本設定を返す
 */
export const useSiteMetadata = (): typeof siteMetadata => {
  return siteMetadata;
};
