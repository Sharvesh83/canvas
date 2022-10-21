/* Iteration 4: Make the Everything Work */
// <!-- Harry Potter - background, face, scarf1, scarf2, hair, text -->

const background = document.getElementById("background");
const buttonbackground = document.getElementById("buttonbackground");

buttonbackground.oninput=()=>{
  background.style.fill=buttonbackground.value;
}

const face = document.getElementById("face");
const buttonface = document.getElementById("buttonface");

buttonface.oninput=()=>{
  face.style.fill=buttonface.value;
}

const scarf1 = document.getElementById("scarf1");
const buttonscarf1 = document.getElementById("buttonscarf1");

buttonscarf1.oninput=()=>{
  scarf1.style.fill=buttonscarf1.value;
}

const scarf2 = document.getElementById("scarf2");
const buttonscarf2 = document.getElementById("buttonscarf2");

buttonscarf2.oninput=()=>{
  scarf2.style.fill=buttonscarf2.value;
}

const hair = document.getElementById("hair");
const buttonhair = document.getElementById("buttonhair");

buttonhair.oninput=()=>{
  hair.style.fill=buttonhair.value;
}

const text = document.getElementById("text");
const buttontext = document.getElementById("buttontext");

buttontext.oninput=()=>{
  text.style.fill=buttontext.value;
}