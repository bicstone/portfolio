import siteMetaData from "@/constants/siteMetaData";

/**
 * gatsby 基本設定を返す
 */
export const useSiteMetadata = (): typeof siteMetaData => {
  return siteMetaData;
};
