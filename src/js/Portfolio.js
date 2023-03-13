fetch('/src/json/portfolio-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogPostList = document.getElementById("blog-post-list");

    blogPosts.forEach(blogPost => {
      const blogPostItem = document.createElement("li");
      blogPostItem.classList.add("post");

      const leftColumn = document.createElement("div");
      leftColumn.classList.add("left-column");

      const blogPostTitle = document.createElement("h2");
      blogPostTitle.innerText = blogPost.title;

      const blogPostDate = document.createElement("p");
      blogPostDate.innerText = new Date(blogPost.datePublished).toLocaleDateString();

      const blogPostContent = document.createElement("div");

      blogPost.content.forEach(p => {
        const para = document.createElement("p");
        para.innerText = p;
        blogPostContent.appendChild(para);
      });

      leftColumn.appendChild(blogPostTitle);
      leftColumn.appendChild(blogPostDate);
      leftColumn.appendChild(blogPostContent);

      blogPostItem.appendChild(leftColumn);

      const blogPostImageList = document.createElement("div");
      blogPostImageList.classList.add("left-column");

      blogPost.image.forEach(image => {
        //const blogPostImageItem = document.createElement("li");
        blogPostImageItem.classList.add("image-item");

        const blogPostImage = document.createElement("img");
        blogPostImage.classList.add("blog-post-image");
        blogPostImage.setAttribute("src", image.url);
        blogPostImage.setAttribute("alt", image.altText);

        blogPostImageItem.appendChild(blogPostImage);
        blogPostImageList.appendChild(blogPostImageItem);
      });

      blogPostItem.appendChild(blogPostImageList);

      blogPostList.appendChild(blogPostItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });