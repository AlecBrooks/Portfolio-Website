fetch('/src/json/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogPostList = document.getElementById("blog-post-list");

    blogPosts.forEach(post => {
      const postItem = document.createElement("li");
      postItem.classList.add("posts");

      const postTitle = document.createElement("h2");
      postTitle.innerText = post.title;

      const postTitle = document.createElement("br");

      const postDate = document.createElement("p");
      postDate.innerText = new Date(post.datePublished).toLocaleDateString();

      const postContent = document.createElement("section");
      post.content.forEach(p => {
        const para = document.createElement("p");
        para.innerText = p;
        postContent.appendChild(para);
      });

      const postImage = document.createElement("img");
      postImage.classList.add("postImage");
      postImage.setAttribute("src", post.image.url);
      postImage.setAttribute("alt", post.image.altText);

      const postDetails = document.createElement("div");
      postDetails.classList.add("postDetails");
      postDetails.appendChild(postTitle);
      postDetails.appendChild(postDate);

      postItem.appendChild(postImage);
      postItem.appendChild(postDetails);
      postItem.appendChild(postContent);

      blogPostList.appendChild(postItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });