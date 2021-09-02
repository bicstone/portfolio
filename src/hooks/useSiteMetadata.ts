import {
  title,
  shortTitle,
  siteUrl,
  description,
  author,
  twitter,
  image,
  image192,
} from 'src/configs/site-meta-data';
import { languages } from 'src/configs/languages';

const siteMetadata = {
  languages,
  title,
  shortTitle,
  siteUrl,
  description,
  author,
  twitter,
  image,
  image192,
};

/**
 * gatsby 基本設定を返す
 */
export const useSiteMetadata = (): typeof siteMetadata => {
  return siteMetadata;
};
