function show() {
  console.log(event);
}
function clear() {
  this.id.classToggle("show");
}

l1 = document.getElementById("Formularz");
l1.addEventListener("mouseover", function () {
  var img = document.createElement("img");
  img.src = l1.id + ".png";
  img.id = l1.id;
  document.getElementById("show").appendChild(img);
});
l1.addEventListener("mouseout", function () {
  const parent = document.getElementById("show");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});

l2 = document.getElementById("Galeria");
l2.addEventListener("mouseover", function () {
    var img = document.createElement("img");
    img.src = l2.id + ".png";
    img.id = l2.id;
    document.getElementById("show").appendChild(img);
});
l2.addEventListener("mouseout", function () {
  const parent = document.getElementById("show");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});

l3 = document.getElementById("Kolko_i_krzyzyk");
l3.addEventListener("mouseover", function () {
    var img = document.createElement("img");
    img.src = l3.id + ".png";
    img.id = l3.id;
    document.getElementById("show").appendChild(img);
});
l3.addEventListener("mouseout", function () {
  const parent = document.getElementById("show");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});

l4 = document.getElementById("Memory");
l4.addEventListener("mouseover", function () {
    var img = document.createElement("img");
    img.src = l4.id + ".png";
    img.id = l4.id;
    document.getElementById("show").appendChild(img);
});
l4.addEventListener("mouseout", function () {
  const parent = document.getElementById("show");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});

l5 = document.getElementById("Breakout");
l5.addEventListener("mouseover", function () {
    var img = document.createElement("img");
    img.src = l5.id + ".png";
    img.id = l5.id;
    document.getElementById("show").appendChild(img);
});
l5.addEventListener("mouseout", function () {
  const parent = document.getElementById("show");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});

l6 = document.getElementById("Pietnastka");
l6.addEventListener("mouseover", function () {
    var img = document.createElement("img");
    img.src = l6.id + ".png";
    img.id = l6.id;
    document.getElementById("show").appendChild(img);
});
l6.addEventListener("mouseout", function () {
  const parent = document.getElementById("show");
  while (parent.firstChild) {
    parent.firstChild.remove();
  }
});
