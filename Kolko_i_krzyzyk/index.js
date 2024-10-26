function myfunc() {
  let b1, b2, b3, b4, b5, b6, b7, b8, b9;
  b1 = document.getElementById("b1").value;
  b2 = document.getElementById("b2").value;
  b3 = document.getElementById("b3").value;
  b4 = document.getElementById("b4").value;
  b5 = document.getElementById("b5").value;
  b6 = document.getElementById("b6").value;
  b7 = document.getElementById("b7").value;
  b8 = document.getElementById("b8").value;
  b9 = document.getElementById("b9").value;

  // x wygrał
  if (b1 == "x" && b2 == "x" && b3 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b1 == "x" && b4 == "x" && b7 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b7 == "x" && b8 == "x" && b9 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (b3 == "x" && b6 == "x" && b9 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (b1 == "x" && b5 == "x" && b9 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (b3 == "x" && b5 == "x" && b7 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b2 == "x" && b5 == "x" && b8 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (b4 == "x" && b5 == "x" && b6 == "x") {
    document.getElementById("display-winner").innerHTML =
      "Gracz <p style='display: inline; color:#FEC5D6;'>x</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  }

  // o wygrało?
  else if (
    (b1 == "o") &&
    (b2 == "o") &&
    (b3 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b1 == "o") &&
    (b4 == "o") &&
    (b7 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b7 == "o") &&
    (b8 == "o") &&
    (b9 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b6").disabled = true;
  } else if (
    (b3 == "o") &&
    (b6 == "o") &&
    (b9 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b5").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (
    (b1 == "o") &&
    (b5 == "o") &&
    (b9 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
  } else if (
    (b3 == "o") &&
    (b5 == "o") &&
    (b7 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b2 == "o") &&
    (b5 == "o") &&
    (b8 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b4").disabled = true;
    document.getElementById("b6").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b9").disabled = true;
  } else if (
    (b4 == "o") &&
    (b5 == "o") &&
    (b6 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "Gracz <p style='display: inline; color:#6CD9B1;'>o</p> wygrał";
    document.getElementById("b1").disabled = true;
    document.getElementById("b2").disabled = true;
    document.getElementById("b3").disabled = true;
    document.getElementById("b7").disabled = true;
    document.getElementById("b8").disabled = true;
    document.getElementById("b9").disabled = true;
  }
  // remis?
  else if (
    (b1 == "x" || b1 == "o") &&
    (b2 == "x" || b2 == "o") &&
    (b3 == "x" || b3 == "o") &&
    (b4 == "x" || b4 == "o") &&
    (b5 == "x" || b5 == "o") &&
    (b6 == "x" || b6 == "o") &&
    (b7 == "x" || b7 == "o") &&
    (b8 == "x" || b8 == "o") &&
    (b9 == "x" || b9 == "o")
  ) {
    document.getElementById("display-winner").innerHTML = "<p style='display: inline; color:#FEC5D6;'>Rem</p><p style='display: inline; color:#6CD9B1;'>is!</p>";
  } else {
    // tura gracza
    if (flag == 1) {
      document.getElementById("display-player").innerHTML =
        "Tura gracza <p style='display: inline; color:#FEC5D6;'>x</p>";
    } else {
      document.getElementById("display-player").innerHTML = "Tura gracza <p style='display: inline; color:#6CD9B1;'>o</p>";
    }
  }
}

// reset gry
function myfunc_2() {
  location.reload();
  document.getElementById("b1").value = "";
  document.getElementById("b2").value = "";
  document.getElementById("b3").value = "";
  document.getElementById("b4").value = "";
  document.getElementById("b5").value = "";
  document.getElementById("b6").value = "";
  document.getElementById("b7").value = "";
  document.getElementById("b8").value = "";
  document.getElementById("b9").value = "";
}

// check turn
flag = 1;
function myfunc_3() {
  if (flag == 1) {
    document.getElementById("b1").value = "x";
    document.getElementById("b1").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b1").value = "o";
    document.getElementById("b1").disabled = true;
    flag = 1;
  }
}

function myfunc_4() {
  if (flag == 1) {
    document.getElementById("b2").value = "x";
    document.getElementById("b2").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b2").value = "o";
    document.getElementById("b2").disabled = true;
    flag = 1;
  }
}

function myfunc_5() {
  if (flag == 1) {
    document.getElementById("b3").value = "x";
    document.getElementById("b3").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b3").value = "o";
    document.getElementById("b3").disabled = true;
    flag = 1;
  }
}

function myfunc_6() {
  if (flag == 1) {
    document.getElementById("b4").value = "x";
    document.getElementById("b4").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b4").value = "o";
    document.getElementById("b4").disabled = true;
    flag = 1;
  }
}

function myfunc_7() {
  if (flag == 1) {
    document.getElementById("b5").value = "x";
    document.getElementById("b5").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b5").value = "o";
    document.getElementById("b5").disabled = true;
    flag = 1;
  }
}

function myfunc_8() {
  if (flag == 1) {
    document.getElementById("b6").value = "x";
    document.getElementById("b6").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b6").value = "o";
    document.getElementById("b6").disabled = true;
    flag = 1;
  }
}

function myfunc_9() {
  if (flag == 1) {
    document.getElementById("b7").value = "x";
    document.getElementById("b7").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b7").value = "o";
    document.getElementById("b7").disabled = true;
    flag = 1;
  }
}

function myfunc_10() {
  if (flag == 1) {
    document.getElementById("b8").value = "x";
    document.getElementById("b8").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b8").value = "o";
    document.getElementById("b8").disabled = true;
    flag = 1;
  }
}

function myfunc_11() {
  if (flag == 1) {
    document.getElementById("b9").value = "x";
    document.getElementById("b9").disabled = true;
    flag = 0;
  } else {
    document.getElementById("b9").value = "o";
    document.getElementById("b9").disabled = true;
    flag = 1;
  }
}
function color(tileC){
  if(tileC.value==="x"){
    tileC.style.color="#FEC5D6";
  }
  else if(tileC.value==="o"){
    tileC.style.color="#6CD9B1";
  }
}