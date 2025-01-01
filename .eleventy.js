import { DateTime } from 'luxon';
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('src/assets/css');
  eleventyConfig.addPassthroughCopy('src/assets/images');
  eleventyConfig.addPassthroughCopy({ "/src/blog/sitemap.xml.njk": "/blog/sitemap.xml" });

  eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "blog/rss.xml",
		collection: {
			name: "posts",
			limit: 0,
		},
		metadata: {
			language: "en",
			title: "Bhargav | Blog",
			subtitle: "Hello, I am Bhargav V, and this is my blog, where I write about technologies I've worked with, I often write on programming and web development, but occationaly I like to write on emerging technologies and tech news.",
			base: "http://localhost:8080/blog",
			author: {
				name: "Bhargav V",
				email: "hellobhargavv@gmail.com",
			}
		}
	});

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
	});

  eleventyConfig.addCollection("featuredPosts", function (collectionApi) {
    return collectionApi.getAll().filter((item) => item.data.featured === true);
  });

  eleventyConfig.addCollection("postTags", function (collectionApi) {
    let tagSet = new Set();
    collectionApi.getFilteredByGlob("src/blog/posts/**/*.md").forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    return [...tagSet];
  });

  eleventyConfig.addCollection("tagPages", function (collectionApi, chunkSize = 10) {
    let tagSet = new Set();
    let tagPages = new Set();
    collectionApi.getFilteredByGlob("src/blog/posts/**/*.md").forEach(item => {
      if ("tags" in item.data) {
        let tags = item.data.tags;
        tags.forEach(tag => tagSet.add(tag));
      }
    });
    tagSet.forEach((tag) => {
      let tagPosts = Array.from(collectionApi.getFilteredByTag(tag)).reverse();
      let totalPagesRequired = Math.ceil(tagPosts.length / chunkSize);
      let id = 0;
      for (let i = 0; i < tagPosts.length; i += chunkSize) {
        tagPages.add({
          id: id,
          tag: tag,
          posts: tagPosts.slice(i, i + chunkSize),
          totalpages: totalPagesRequired
        });
        id++;
      }
    });
    return [...tagPages];
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};