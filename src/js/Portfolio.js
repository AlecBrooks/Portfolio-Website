fetch('/src/json/portfolio-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogPostList = document.getElementById("blog-post-list");

    blogPosts.forEach(post => {
      const postItem = document.createElement("li");
      postItem.classList.add("post");

      const leftColumn = document.createElement("div");
      leftColumn.classList.add("left-column");

      const postTitle = document.createElement("h2");
      postTitle.innerText = post.title;

      const postDate = document.createElement("p");
      postDate.innerText = new Date(post.datePublished).toLocaleDateString();

      const postContent = document.createElement("div");

      post.content.forEach(p => {
        const para = document.createElement("p");
        para.innerText = p;
        postContent.appendChild(para);
      });

      leftColumn.appendChild(postTitle);
      leftColumn.appendChild(postDate);
      leftColumn.appendChild(postContent);

      postItem.appendChild(leftColumn);

      const postImage = document.createElement("img");
      postImage.classList.add("postImage");
      postImage.setAttribute("src", post.image.url);
      postImage.setAttribute("alt", post.image.altText);

      postItem.appendChild(postImage);

      blogPostList.appendChild(postItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });