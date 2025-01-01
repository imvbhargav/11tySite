export default function (data) {
	return {
		layout: "article.njk",
		permalink: "blog/posts/{{ title | slugify }}/",
		priority: 1.0
	}
}