---
title: Implimenting multi level pagination in 11ty.
date: 2025-02-10
tags: 
      - Eleventy
featured: true
description: This post intoduces to the Netflix's distributed counter abstraction system. This system is designed to store and query large volumes of temporal event data low millisecond latencies.
image: https://images.unsplash.com/photo-1725452119307-14e2642a78a6?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
---
#### Introduction
Eleventy, often referred to as 11ty, is a modern static site generator praised for its simplicity, flexibility, and speed. With multiple template language support and minimal dependencies, it provides developers fine-grained control over their websites.

\- Says [Sanity](https://www.sanity.io/glossary/eleventy) 

Even this site uses 11ty, which makes the creation and generation of site very simple and dynamic.

#### Creating a blog in 11ty
This blog created using 11ty has a feature that took some time for me to figure out. What is that you ask? Pagination. 

Pagination is very simple in 11ty. In my case, I have file that create the page to show my blog posts resides in `src/blog/all` folder. This folder has a `index.js` file that handles the structure. To do the pagination all I had to do is add

```md
pagination:
  data: collections.posts
  size: 10
  reverse: true
```

So what does it do? From the collections posts, it gets 10 posts and create a page. Likewise if you have 100 posts it creates 10 pages, each having 10 posts. Which in public folder looks like this

```
public
  - blog
  -  - all
  -  -  - 1
  -  -  - 2
```

so on. and the reverse it to arrange the posts such a way that latest posts comes first.

#### Creating a collection
To do all this we need a collection, a simple way to create a colection in 11ty is to add `posts` to `tags` metadata attribute in your posts markdown file.

But this method can be a little annoying considering that, for every posts you have to manually add `posts` to your `tags` metadata attribute. One way to avoid this is to create file `posts.11tydata.js` the name is because my blog posts resides in `src/blog/posts` folder, since it is inside posts, the name has `posts.`.

Inside that file:
```js
export default function (data) {
	return {
		layout: "article.njk",
    tags: ["posts"],
	}
}
```

This adds the tag `posts` and layout `article.njk` to all the `.md` files added in `/posts` folder, so that we do not have to add the tag `posts` manually.

Another better method to the same is to add 

```js
eleventyConfig.addCollection("posts", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
});
```

to your `.eleventy.js` file, this also creates a collection of all your posts.

Using any of the above methods yeilds the same results, that is it lets you access the posts using the collectionApi `collections.posts`.

#### Creating tags collection
Now since, we know using tags attribute in metadata, we can create collection that has the posts related to that tag. So, we can use the same to add tags to our blog posts, which can help the users find posts using the tags, narrowing the number articles that the user has to search through.

Now we have to create pages for each tag. That is if we have 3 tags like Technology, 11ty, and Javascript. Then the pages should be `/technology` which shows all the posts with tag `Technology`, likewise `/11ty` and `/javascript`. 

Now just like how we did for all posts using pagination, we can achieve the same. We create a new folder named `tags` with `tag.njk` file that provides the template for the page. 

First we create tags collection with name `postTags`
```js
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
```

This loops through the posts and create a collection of all the tags with name `postTags`, with this now if we use pagination, 

```
pagination:
  data: collections.postTags
  size: 1
```

Size has to be one as we need each tag having a separate page.

##### Success!

So our aim of creating different page for each tag is working, so when user visits `/technology`, he finds all the posts that has tag Technology, but wait we have 100 posts related to related to technology, and all those 100 posts in the same page. That is not correct, right?

So now we need multiple pages for each tag page. Now this is the tricky part.

#### Final solution
So to actually implement this feature, we need to create another collection 

```js
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
  ```

  Now this creates another collection named `tagPages`. What we are basically doing is, 
  - Loop through all the tags 
  - Get all the posts with that tag to `tagPosts`
  - Calulate the total number of pages required based on the number of posts available
  - Loop through the `tagPosts`
  - Append the array of 10 posts to the tagPages collection

Here, each object of the tagPage collection has `id`, `tag`, `posts` and `totalpages` attributes, where `posts` has the array of 10 posts. Now we can use this collection to create page for each tag such that if that tag more than 10 pages then creates multiple numbered pages like `/technology/1`, `/technology/2` and so on.

Now just do

```md
pagination:
  data: collections.tagPages
  size: 1
```

and done. Now customize the `tag.njk` file to display the posts in the page.

```html
\---
layout: base.njk
pagination:
  data: collections.tagPages
  size: 1
  alias: tagpage
permalink: "{% if tagpage.id == 0 %}{{ '/blog/tags/' + tagpage.tag | slugify + '/index.html' }}{% else %}{{ '/blog/tags/' + tagpage.tag | slugify + '/' + tagpage.id + '/index.html' }}{% endif %}"
\---
<div class="posts_wrapper rounded">
  <h3 class="heading"><span class="rounded">Posts tagged {{ tagpage.tag }}</span></h3>
  <h3 class="seeall rounded"><a class="spl_link rounded" href="/blog/all">see all posts &rarr;</a></h3>
  <section aria-label="All posts" class="all_posts">
    {%- for post in tagpage.posts -%}
        <a href="{{ post.url }}" class="post rounded">
          <img
            src="{% if post.data.image %}{{ post.data.image }}{% else %}https://fakeimg.pl/600x400/333333/666666?text=-+No+Image+-&font=default{% endif %}"
            alt="{% if post.data.imageAlt %}{{ post.data.imageAlt }}{% else %}Image not added to post{% endif %}"
            width="100%"
            class="post_img rounded"
          />
          <div class="content">
            <p class="post_date"><small class="post_data__span"><time>{{ post.data.date | postDate }}</time><span class="tag">{{ tagpage.tag }}</span></small></p>
            <p class="post_title">{{ post.data.title | truncate(60) }}</p>
            <small class="post_description">{{ post.data.description | safe | truncate(160) }}</small>
          </div>
        </a>
    {%- endfor -%}
  </section>
</div>
<nav class="pagination_nav" aria-labelledby="pagination">
  <ul class="pagination_links">
      {% if tagpage.id != 0 and tagpage.id != 1 %}
      <li>
        <a class="spl_link" href="/blog/tags/{{ tagpage.tag | slugify }}">First</a>
      </li>
      {% endif %}
      {% if tagpage.id > 0 %}
      <li>
        {% if tagpage.id == 1 %}
        <a class="spl_link" href="/blog/tags/{{ tagpage.tag | slugify }}">Previous</a>
        {% else %}
        <a class="spl_link" href="/blog/tags/{{ tagpage.tag | slugify }}/{{ tagpage.id - 1 }}">Previous</a>
        {% endif %}
      </li>
      {% endif %}
      <li>
        <a class="spl_link" href="/blog/tags/{{ tagpage.tag | slugify }}/{{ tagpage.id }}" aria-current="page">{{ tagpage.id + 1 }}</a>
      </li>
      {% if tagpage.id < tagpage.totalpages - 1 %}
      <li>
        <a class="spl_link" href="/blog/tags/{{ tagpage.tag | slugify }}/{{ tagpage.id + 1 }}">Next</a>
      </li>
      {% endif %}
      {% if tagpage.id < tagpage.totalpages - 1 and tagpage.id != tagpage.totalpages - 2 %}
      <li>
        <a class="spl_link" href="/blog/tags/{{ tagpage.tag | slugify }}/{{ tagpage.totalpages - 1 }}">Last</a>
      </li>
      {% endif %}
  </ul>
</nav>
```