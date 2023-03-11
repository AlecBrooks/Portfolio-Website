fetch("src/json/blog-posts.json")
  .then(response => response.json())
  .then(data => {
    const posts = data.blogPosts;
    const postsContainer = document.getElementById("posts-container");
    posts.forEach(post => {
      const postDiv = document.createElement("li");
      postDiv.className = "post";
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.datePublished}</p>
        <p>${post.content}</p>
        <img src="${post.image.url}" alt="${post.image.altText}">
      `;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => console.error(error));
