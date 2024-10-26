//DIV1 - powitanie
function witaj() {
  let a = prompt("podaj imie", "");
  alert("witaj na stronie " + a + "!");
}

//DIV1 - zmiana parametrów

document.addEventListener("keydown", keyDown);
function keyDown(e) {
  if (e.keyCode === 13) {
    let x = document.getElementById("divStLeft").value;
    div1.style.left = x + "px";
  }
}
document.addEventListener("keydown", keyDown);
function keyDown(WhatKey) {
  console.log(WhatKey.keyCode);
  if (WhatKey.keyCode === 76) {
    //l
    let x = document.getElementById("divStLeft").value;
    div1.style.left = x + "px";
  }
  if (WhatKey.keyCode === 87) {
    //w
    let x = document.getElementById("borderWidth").value;

    div1.style.borderWidth = x + "px";
    console.log(div1.style.borderWidth);
  }
}
function Clear(clr) {
  clr.value = "";
}
var bColor = document.getElementById("borderColor"); //zbiera tekst koloru

bColor.addEventListener(
  "input",
  function () {
    div1.style.borderColor = bColor.value; //konwersja na value
    console.log("input"); //fires when theres an input
  },
  false
);

var bStyle = document.getElementById("borderStyle");

bStyle.addEventListener(
  "change",
  function () {
    div1.style.borderStyle = bStyle.value; //konwersja na value
    console.log("change"); //fires when theres a change
  },
  false
);

// KALKULATOR

function Dodaj() {
  form1.c1.value = parseFloat(form1.a1.value) + parseFloat(form1.b1.value);
}
function Odejmij() {
  form1.c1.value = parseFloat(form1.a1.value) - parseFloat(form1.b1.value);
}
function Pomnoz() {
  form1.c1.value = parseFloat(form1.a1.value) * parseFloat(form1.b1.value);
}
function Dziel() {
  form1.c1.value = parseFloat(form1.a1.value) / parseFloat(form1.b1.value);
}
function Pierwiastek() {
  let a = prompt("Podaj wartosc do liczenia pierwiastka", "");
  alert("Wartosc pierwiastka z liczby " + a + " wynosi " + Math.sqrt(a));
}
function Silnia() {
  let silnia = prompt("Podaj silnie", "");
  let licznik = 1;
  for (let i = 1; i < silnia; i++) {
    licznik += licznik * i;
  }
  alert("Wartosc silni z liczby " + silnia + " wynosi " + licznik);
}
function Potega() {
  let a = prompt("Podaj liczbe a");
  let b = prompt("Podaj b");
  alert("Liczba " + a + " do potegi " + b + " wynosi " + Math.pow(a, b));
}
