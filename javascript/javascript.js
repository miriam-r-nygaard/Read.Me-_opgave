"use strict";
const katte = ["Mio", "Miso", "Luna", "Gandalf"];
let text = "";
for (let i = 0; i < katte.length; i++) {
  text += katte[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
