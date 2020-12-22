import {
  languages,
  title,
  shortTitle,
  siteUrl,
  description,
  image,
  image192,
} from '../../.gatsby/gatsby-config';

const siteMetadata = {
  languages,
  title,
  shortTitle,
  siteUrl,
  description,
  image,
  image192,
};

export const useSiteMetadata = (): typeof siteMetadata => {
  return siteMetadata;
};
