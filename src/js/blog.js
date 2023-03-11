const blogPostsUrl = "src/json/blog-posts.json";

fetch(blogPostsUrl)
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;

    const blogPostsContainer = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
      const postElement = document.createElement("li");
      postElement.classList.add("posts");

      const titleElement = document.createElement("h2");
      titleElement.textContent = post.title;
      postElement.appendChild(titleElement);

      const dateElement = document.createElement("p");
      dateElement.textContent = `Published on ${post.datePublished}`;
      postElement.appendChild(dateElement);

      const contentElement = document.createElement("section");
      const contentParagraph = document.createElement("p");
      contentParagraph.textContent = post.content;
      contentElement.appendChild(contentParagraph);
      postElement.appendChild(contentElement);

      blogPostsContainer.appendChild(postElement);
    });
  })
  .catch(error => console.error(error));