fetch("/src/data/blog-posts.json")
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogList = document.getElementById("blog-posts");

    blogPosts.forEach(post => {
      const listItem = document.createElement("li");
      listItem.classList.add("posts");

      const title = document.createElement("h2");
      title.textContent = post.title;

      const date = document.createElement("p");
      const formattedDate = new Date(post.datePublished).toLocaleDateString();
      date.textContent = `Published on ${formattedDate}`;

      const contentSection = document.createElement("section");
      const content = document.createElement("p");
      content.textContent = post.content;
      contentSection.appendChild(content);

      const image = document.createElement("img");
      image.src = post.image.url;
      image.alt = post.image.altText;
      image.classList.add("post-image");

      listItem.appendChild(title);
      listItem.appendChild(date);
      listItem.appendChild(contentSection);
      listItem.appendChild(image);

      blogList.appendChild(listItem);
    });
  })
  .catch(error => console.log(error));