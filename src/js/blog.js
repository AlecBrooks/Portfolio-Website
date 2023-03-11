fetch('/src/json/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogPostsElement = document.getElementById('blog-posts');

    blogPosts.forEach(post => {
      const postElement = document.createElement('li');
      postElement.classList.add('post');

      const postTitleElement = document.createElement('h2');
      postTitleElement.innerText = post.title;

      const postDateElement = document.createElement('p');
      postDateElement.innerText = `Published on ${new Date(post.datePublished).toLocaleDateString()}`;

      const postContentElement = document.createElement('section');
      const postContentParagraphElement = document.createElement('p');
      postContentParagraphElement.innerText = post.content;

      const postImageElement = document.createElement('img');
      postImageElement.classList.add('postImage');
      postImageElement.src = post.image.url;
      postImageElement.alt = post.image.altText;

      postContentElement.appendChild(postContentParagraphElement);

      postElement.appendChild(postTitleElement);
      postElement.appendChild(postDateElement);
      postElement.appendChild(postContentElement);
      postElement.appendChild(postImageElement);

      blogPostsElement.appendChild(postElement);
    });
  })
  .catch(error => {
    console.error('Error fetching blog posts:', error);
  });