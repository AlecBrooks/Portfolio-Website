

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
  localStorage.setItem("PageVar", url);
}

function highlightNav() {
  const navItems = document.querySelectorAll("#NavButtons li");
  let NavItem;

  if (localStorage.getItem("PageVar") === '/src/pages/Intro.html') {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.borderBottom = "0px solid #8FC1E3";
      navItems[i].style.pointerEvents = "auto";
    }

    NavItem = document.querySelector("#NavButtons li:first-child");
  } else if (localStorage.getItem("PageVar") === '/src/pages/Analysis.html') {
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.borderBottom = "0px solid #8FC1E3";
      navItems[i].style.pointerEvents = "auto";
    }

    NavItem = document.querySelector("#NavButtons li:nth-child(2)");
  } else {
    // Code to execute if neither condition is true
    return;
  }

  NavItem.style.color = "#8FC1E3";
  NavItem.style.borderBottom = "3px solid #8FC1E3";
  NavItem.style.pointerEvents = "none";
}





