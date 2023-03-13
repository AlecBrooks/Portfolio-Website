fetch('/src/json/portfolio-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const postList = document.getElementById("post-list");

    blogPosts.forEach(post => {
      const postItem = document.createElement("li");
      postItem.classList.add("post");

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

      postItem.appendChild(postTitle);
      postItem.appendChild(postDate);
      postItem.appendChild(postContent);

      post.images.forEach(image => {
        const postImage = document.createElement("img");
        postImage.classList.add("postImage");
        postImage.setAttribute("src", image.url);
        postImage.setAttribute("alt", image.altText);

        postItem.appendChild(postImage);
      });

      postList.appendChild(postItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });