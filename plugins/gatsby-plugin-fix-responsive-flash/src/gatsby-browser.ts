import type { GatsbyBrowser } from 'gatsby';

export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = (_, pluginOptions) => {
  const className = pluginOptions.className as string;
  window.document.body.classList.remove(className);
};
