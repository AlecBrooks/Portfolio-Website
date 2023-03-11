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

      const postDate = document.createElement("p");
      postDate.innerText = "Published on " + new Date(post.datePublished).toLocaleDateString();

      const postImage = document.createElement("img");
      postImage.classList.add("postImage");
      postImage.setAttribute("src", post.image.url);
      postImage.setAttribute("alt", post.image.altText);

      const postContent = document.createElement("section");
      const paragraphs = post.content.split('\n\n');
      paragraphs.forEach(p => {
        const para = document.createElement("p");
        para.innerText = p;
        postContent.appendChild(para);
      });

      postItem.appendChild(postTitle);
      postItem.appendChild(postDate);
      postItem.appendChild(postImage);
      postItem.appendChild(postContent);

      blogPostList.appendChild(postItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });