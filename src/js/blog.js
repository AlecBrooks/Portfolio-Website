fetch('/src/json/blogPosts.json')
  .then(response => response.json())
  .then(data => {
    const ul = document.querySelector('ul');
    data.blogPosts.forEach(post => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.textContent = post.title;
      li.appendChild(a);
      ul.appendChild(li);
    });
  })
  .catch(error => console.error(error));