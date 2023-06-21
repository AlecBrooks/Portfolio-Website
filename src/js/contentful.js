// contentful.js

const client = contentful.createClient({
    space: '5hf81zgqzzmj',
    environment: 'master', // defaults to 'master' if not set
    accessToken: 'mBtlFDwwsuhwDJK50szrgLEqSkU3ETY0e0waaoowqU4'
  });
  
  function populateContent() {
    const contentElement = document.getElementById('blog-post-list');
  
    client.getEntries()
      .then((response) => {
        response.items.forEach((item) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <h2>${item.fields.title}</h2>
            <p>${item.fields.content}</p>`;
          contentElement.appendChild(listItem);
        });
      })
      .catch(console.error);
  }
  
  // Call the populateContent() function to fetch and populate the content
  populateContent();