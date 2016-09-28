function createElement1() {
  var element = document.createElement("h2");
  element.innerHTML = "Styles 1";
  element.className = "styles1";
  document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", createElement1);

function createElement2() {
  var element = document.createElement("h2");
  element.innerHTML = "Styles 2";
  element.className = "styles2";
  document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", createElement2);

//# sourceMappingURL=scripts.js.map
