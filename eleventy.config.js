import markdownIt from 'markdown-it';

export default async function (eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy")

  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.setInputDirectory("src/_pages");
  eleventyConfig.setIncludesDirectory("../_templates/includes");
  eleventyConfig.setLayoutsDirectory("../_templates/layouts");
  eleventyConfig.setDataDirectory("../_data");

  eleventyConfig.addPassthroughCopy({ "src/assets": "/assets" });

  eleventyConfig.setLiquidParameterParsing("builtin");

  // inspect objects as JSON
  eleventyConfig.addFilter("jsonify", (data) => {
    return JSON.stringify(data, null, "\t");
  });

  // add plugin to handle pathprefix
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.setLibrary("md", markdownIt({
		breaks: true,
    html: true,
    linkify: true,
    typographer: true
	}));
return { pathPrefix: "/mock/" };
}