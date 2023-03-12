fetch('/src/json/portfolio-posts.json')
  .then(response => response.json())
  .then(data => {
    const photos = data.photos;
    const photoList = document.getElementById("photo-list");

    photos.forEach(photo => {
      const photoItem = document.createElement("li");
      photoItem.classList.add("photo");

      const leftColumn = document.createElement("div");
      leftColumn.classList.add("left-column");

      const photoTitle = document.createElement("h2");
      photoTitle.innerText = photo.title;

      const photoDate = document.createElement("p");
      photoDate.innerText = new Date(photo.dateTaken).toLocaleDateString();

      const photoContent = document.createElement("div");

      photo.content.forEach(p => {
        const para = document.createElement("p");
        para.innerText = p;
        photoContent.appendChild(para);
      });

      leftColumn.appendChild(photoTitle);
      leftColumn.appendChild(photoDate);
      leftColumn.appendChild(photoContent);

      photoItem.appendChild(leftColumn);

      const photoImage = document.createElement("img");
      photoImage.classList.add("photoImage");
      photoImage.setAttribute("src", photo.image.url);
      photoImage.setAttribute("alt", photo.image.altText);

      photoItem.appendChild(photoImage);

      photoList.appendChild(photoItem);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });