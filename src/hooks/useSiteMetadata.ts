import siteMetaData from 'src/constants/site-meta-data';

/**
 * gatsby 基本設定を返す
 */
export const useSiteMetadata = (): typeof siteMetaData => {
  return siteMetaData;
};
