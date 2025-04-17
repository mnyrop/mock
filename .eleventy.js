const cleancss = require('clean-css');

module.exports = function(eleventyConfig) {
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
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}