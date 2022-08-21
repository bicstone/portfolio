import type { GatsbyNode } from 'gatsby';

export const pluginOptionsSchema: GatsbyNode['pluginOptionsSchema'] = ({ Joi }) => {
  return Joi.object({
    breakpoint: Joi.required().description('The width of viewport without the loading screen'),
    className: Joi.string()
      .default('gatsby-plugin-fix-responsive-flash-is-loading')
      .description('The class name of the loading screen'),
    timeout: Joi.number()
      .default(2000)
      .description(
        'The time, in milliseconds of the timer should wait before hiding the loading screen.',
      ),
  });
};
