fetch('/src/json/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogPostsContainer = document.getElementById('blog-posts-container');

    blogPosts.forEach(post => {
      const postItem = document.createElement('li');
      postItem.classList.add('post-item');

      const postTitle = document.createElement('h2');
      postTitle.classList.add('post-title');
      postTitle.textContent = post.title;

      const postDate = document.createElement('p');
      postDate.classList.add('post-date');
      postDate.textContent = post.datePublished;

      const postContent = document.createElement('p');
      postContent.classList.add('post-content');
      postContent.textContent = post.content;

      const postImage = document.createElement('img');
      postImage.classList.add('post-image');
      postImage.src = post.image.url;
      postImage.alt = post.image.altText;

      postItem.appendChild(postTitle);
      postItem.appendChild(postDate);
      postItem.appendChild(postContent);
      postItem.appendChild(postImage);
      blogPostsContainer.appendChild(postItem);
    });
  })
  .catch(error => console.error(error));