function createElement2() {
  var element = document.createElement("h2");
  element.innerHTML = "Styles 2";
  element.className = "styles2";
  document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", createElement2);
