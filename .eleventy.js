

module.exports = async function(eleventyConfig) {
  const cleancss = await require('clean-css');
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // minify css filter
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleancss({}).minify(code).styles;
  })

  // inspect objects as JSON
  eleventyConfig.addFilter('jsonify', (data) => {
    return JSON.stringify(data, null, "\t")
  })  

  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')

  eleventyConfig.addPassthroughCopy('static')
  
  return {
    markdownTemplateEngine: 'liquid',
    pathPrefix: "/mock/",
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}