

function Pages(url) {


     PageVariable(url);
     console.log(localStorage.getItem("PageVar"));
     embedHTML();
}

function PageVariable(url) {
    localStorage.setItem("PageVar", url);
}

function embedHTML() {
  const url = localStorage.getItem("PageVar");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "document";
  xhr.onload = function () {
    const responseHTML = xhr.response.documentElement;
    const myContentElement = responseHTML.querySelector("#MyContent");
    const currentMyContentElement = document.querySelector("#MyContent");
    if (myContentElement && currentMyContentElement) {
      currentMyContentElement.innerHTML = myContentElement.innerHTML;
    } else {
      console.error("Could not find the #MyContent element in either the response HTML or the current document.");
    }
  };
  xhr.send();
  let myVariable = localStorage.getItem('PageVar');
  localStorage.removeItem('PageVar');
}