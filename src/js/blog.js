fetch('src/json/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogPostsList = document.getElementById('blog-posts');
    
    blogPosts.forEach(post => {
      const postListItem = document.createElement('li');
      const postTitle = document.createElement('h2');
      const postDate = document.createElement('p');
      const postContent = document.createElement('p');
      const postImage = document.createElement('img');
      
      postTitle.innerText = post.title;
      postDate.innerText = post.datePublished;
      postContent.innerText = post.content;
      postImage.src = post.image.url;
      postImage.alt = post.image.altText;
      
      postListItem.appendChild(postTitle);
      postListItem.appendChild(postDate);
      postListItem.appendChild(postContent);
      postListItem.appendChild(postImage);
      
      blogPostsList.appendChild(postListItem);
    });
  })
  .catch(error => console.error(error));