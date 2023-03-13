

function Pages(url) {

    function PageVariable(url)
    function embedHTML()

}

function  PageVariable(url) {
    localStorage.setItem("PageVar", url);
}

function embedHTML() {
    const url = localStorage.getItem("PageVar");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "document";
    xhr.onload = function () {
      const responseHTML = xhr.response.documentElement;
      const mainElement = responseHTML.querySelector("main");
      const currentMainElement = document.querySelector("main");
      if (mainElement && currentMainElement) {
        currentMainElement.innerHTML = mainElement.innerHTML;
      } else {
        console.error("Could not find the <main> element in either the response HTML or the current document.");
      }
    };
    xhr.send();
    console.log("Pulled");
  }