function Zoom(a) {
  let divID = document.getElementById(a.id);
  let sauce = divID.firstChild.getAttribute("src");
  console.log(sauce);
  document.getElementById("soc").innerHTML = "<img src='" + sauce + "''/>";
}