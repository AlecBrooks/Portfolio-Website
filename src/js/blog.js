const blogPosts = document.getElementById("blogPosts");
const apiUrl = "https://www.brooksdev.org/src/json/blog-posts.json";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const posts = data.blogPosts;

    posts.forEach(post => {
      const li = document.createElement("li");
      const title = document.createElement("h2");
      const date = document.createElement("p");
      const content = document.createElement("p");
      const image = document.createElement("img");

      title.textContent = post.title;
      date.textContent = post.datePublished;
      content.textContent = post.content;
      image.src = post.image.url;
      image.alt = post.image.altText;

      li.appendChild(title);
      li.appendChild(date);
      li.appendChild(content);
      li.appendChild(image);

      if (blogPosts) {
        blogPosts.appendChild(li);
      }
    });
  })
  .catch(error => console.error(error));