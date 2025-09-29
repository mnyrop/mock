import markdownIt from 'markdown-it';

export default async function (eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy")

  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.setInputDirectory("src/_content");
  eleventyConfig.setIncludesDirectory("../_components");
  eleventyConfig.setLayoutsDirectory("../_layouts");
  eleventyConfig.setDataDirectory("../_data");

  eleventyConfig.addPassthroughCopy({ "src/_assets": "/assets" });
  eleventyConfig.addPassthroughCopy({ "src/_data/demo/files": "/files" });
  eleventyConfig.addPassthroughCopy({ "src/_media": "/media" });

  eleventyConfig.setLiquidParameterParsing("builtin");

  // inspect objects as JSON
  eleventyConfig.addFilter("json", (data) => {
    return JSON.stringify(data, null, "\t");
  });

  // parse CSV files in _data
  const { parse } = await import("csv-parse/sync");
  eleventyConfig.addDataExtension("csv", (contents) => {
    const records = parse(contents, {
      columns: true,
      skip_empty_lines: true,
    })
    return records
  });

  // add plugin to handle pathprefix
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.setLibrary("md", markdownIt({
		breaks: true,
    html: true,
    linkify: true,
    typographer: true
	}));

  const mdRender = new markdownIt();
  eleventyConfig.addFilter("markdown", function(string) {
    return mdRender.render(string);
  });
return { pathPrefix: "/mock/" };
}
