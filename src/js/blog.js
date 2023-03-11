fetch('/src/json/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const blogList = document.querySelector('#blogList');

    blogPosts.forEach(post => {
      const postElement = document.createElement('li');
      postElement.classList.add('posts');
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>Published on ${post.datePublished}</p>
        <section>${createParagraphs(post.content)}</section>
        <img class="postImage" src="${post.image.url}" alt="${post.image.altText}">
      `;
      blogList.appendChild(postElement);
    });
  });

function createParagraphs(content) {
  if (typeof content !== 'string') {
    return '';
  }

  const paragraphs = content.split('\n').map(paragraph => {
    return `<p>${paragraph.trim()}</p>`;
  });

  return paragraphs.join('');
}