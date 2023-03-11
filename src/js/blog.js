const blogPostsUrl = "/src/json/blog-posts.json";

fetch(blogPostsUrl)
  .then((response) => response.json())
  .then((data) => {
    const blogPosts = data.blogPosts;

    blogPosts.forEach((post) => {
      const blogPostList = document.getElementById("blog-posts");

      const blogPost = document.createElement("li");
      blogPost.classList.add("posts");

      const blogPostTitle = document.createElement("h2");
      const titleText = document.createTextNode(post.title);
      blogPostTitle.appendChild(titleText);

      const blogPostDate = document.createElement("p");
      const datePublished = new Date(post.datePublished).toLocaleDateString();
      const dateText = document.createTextNode("Published on " + datePublished);
      blogPostDate.appendChild(dateText);

      const blogPostImage = document.createElement("img");
      blogPostImage.src = post.image.url;
      blogPostImage.alt = post.image.altText;
      blogPostImage.style.display = "block";
      blogPostImage.style.margin = "auto";
      blogPostImage.style.width = "50%";

      const blogPostContent = document.createElement("section");
      const contentText = document.createTextNode(post.content);
      blogPostContent.appendChild(contentText);

      blogPost.appendChild(blogPostTitle);
      blogPost.appendChild(blogPostDate);
      blogPost.appendChild(blogPostImage);
      blogPost.appendChild(blogPostContent);

      blogPostList.appendChild(blogPost);
    });
  })
  .catch((error) => console.error("Error loading blog posts", error));