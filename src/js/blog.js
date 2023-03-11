fetch('src/json/blog-posts.json')
  .then(response => response.json())
  .then(data => {
    const ul = document.getElementById('blog-posts');
    data.blogPosts.forEach(post => {
      const li = document.createElement('li');
      const h2 = document.createElement('h2');
      const date = document.createElement('p');
      const content = document.createElement('p');
      const img = document.createElement('img');
      h2.textContent = post.title;
      date.textContent = post.datePublished;
      content.textContent = post.content;
      img.src = post.image.url;
      img.alt = post.image.altText;
      li.appendChild(h2);
      li.appendChild(date);
      li.appendChild(content);
      li.appendChild(img);
      ul.appendChild(li);
    });
  })
  .catch(error => console.error(error));
