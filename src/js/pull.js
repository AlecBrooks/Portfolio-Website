

function Pages(url) {


     PageVariable(url);
     embedHTML();
     highlightNav();
     console.log(localStorage.getItem("PageVar"))
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

function highlightNav() {
  if (localStorage.getItem("PageVar") === '/src/pages/Intro.html') {
    const firstNavItem = document.querySelector("#NavButtons li:first-child");
    firstNavItem.style.color = "#8FC1E3";
    firstNavItem.style.borderBottom = "3px solid #8FC1E3";
  }
}