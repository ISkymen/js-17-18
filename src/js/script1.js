function createElement1() {
  var element = document.createElement("h2");
  element.innerHTML = "Styles 1";
  element.className = "styles1";
  document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", createElement1);
