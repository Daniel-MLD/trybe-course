let btnBackground = document.getElementById("btn-background");
let btnTextColor = document.getElementById("btn-text-color");
let btnFontSize = document.getElementById("btn-font-size");
let btnLine = document.getElementById("btn-line");
let btnFont = document.getElementById("btn-font");

window.onload = onInit;

let bodyColor = "gray";

function onInit() {
  document.querySelector("body").style.backgroundColor = localStorage.getItem("backColor");
  document.querySelector(".content").style.color = localStorage.getItem("fontColor");
  document.querySelector(".content").style.fontSize = localStorage.getItem("fontSize");
}


btnBackground.addEventListener("click", function(){
  if (bodyColor == "gray") {
    document.querySelector("body").style.backgroundColor = "white";
    bodyColor = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "gray";
    bodyColor = "gray";
  }
  localStorage.setItem("backColor", bodyColor);
});

let fontColor = "black";

btnTextColor.addEventListener("click", function(){
  if (fontColor == "black") {
    document.querySelector(".content").style.color = "white";
    fontColor = "white";
  } else {
    document.querySelector(".content").style.color = "black";
    fontColor = "black";
  }
  localStorage.setItem("fontColor", fontColor);
});

let fontSize = "small";

btnFontSize.addEventListener("click", function(){
  if (fontSize == "small") {
    document.querySelector(".content").style.fontSize = "20px";
    fontSize = "big";
  } else {
    document.querySelector(".content").style.fontSize = "15px";
    fontSize = "small";
  }
  localStorage.setItem("fontSize", fontSize);
});



/*let bodyColor = "gray";

btnBackground.addEventListener("click", function(){
  if (bodyColor == "gray") {
    document.querySelector("body").style.backgroundColor = "white";
    bodyColor = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "gray";
    bodyColor = "gray";
  }
});

let bodyColor = "gray";

btnBackground.addEventListener("click", function(){
  if (bodyColor == "gray") {
    document.querySelector("body").style.backgroundColor = "white";
    bodyColor = "white";
  } else {
    document.querySelector("body").style.backgroundColor = "gray";
    bodyColor = "gray";
  }
});*/

