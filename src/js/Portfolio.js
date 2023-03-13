fetch('/src/json/portfolio-posts.json')
  .then(response => response.json())
  .then(data => {
    const blogPosts = data.blogPosts;
    const photoList = document.getElementById("photo-list");

    blogPosts.forEach(post => {
      const photos = post.image;

      const photoItem = document.createElement("li");
      photoItem.classList.add("photo");

      const leftColumn = document.createElement("div");
      leftColumn.classList.add("left-column");

      const photoTitle = document.createElement("h2");
      photoTitle.innerText = post.title;

      const photoDate = document.createElement("p");
      photoDate.innerText = new Date(post.datePublished).toLocaleDateString();

      const photoContent = document.createElement("div");

      post.content.forEach(p => {
        const para = document.createElement("p");
        para.innerText = p;
        photoContent.appendChild(para);
      });

      leftColumn.appendChild(photoTitle);
      leftColumn.appendChild(photoDate);
      leftColumn.appendChild(photoContent);

      photoItem.appendChild(leftColumn);

      photos.forEach(photo => {
        const photoImage = document.createElement("img");
        photoImage.classList.add("photoImage");
        photoImage.setAttribute("src", photo.url);
        photoImage.setAttribute("alt", photo.altText);

        photoItem.appendChild(photoImage);
      });

      photoList.appendChild(photoItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
