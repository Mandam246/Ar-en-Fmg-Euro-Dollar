let ar = document.getElementById("ar");
let fmg = document.getElementById("fmg");
let euro = document.getElementById("euro");
let dolar = document.getElementById("dolar");
let mode = document.querySelector(".btn");
let bo = document.getElementById("bo");
let mo = document.getElementById("mo");
mode.addEventListener("click", modef);
let model = 0;

ar.addEventListener("input", dar);
fmg.addEventListener("input", dfmg);
euro.addEventListener("input", deuro);
dolar.addEventListener("input", ddolar);

function dar() {
   arval = ar.value;
   fmg.value = Math.round(arval*5*100000)/100000;
   euro.value = Math.round(arval/4970*100000)/100000;
   dolar.value = Math.round(arval/4746.32*100000)/100000;
}
function dfmg() {
   fmgval = fmg.value;
   ar.value = Math.round(fmgval/5*100000)/100000;
   euro.value = Math.round(fmgval/24850*100000)/100000;
   dolar.value = Math.round(fmgval/23731.60*100000)/100000;
}
function deuro() {
   euroval = euro.value;
   ar.value = Math.round(euroval*4970*100000)/100000;
   fmg.value = Math.round(euroval*(4970*5)*100000)/100000;
   dolar.value = Math.round(euroval*1.0471270373678978*100000)/100000;
}
function ddolar() {
   dolarval = dolar.value;
   ar.value = Math.round(dolarval * 4746.32*100000)/100000;
   fmg.value = Math.round(dolarval * 23731.6*100000)/100000;
   euro.value = Math.round(dolarval * 0.9549939638*100000)/100000;
}
function modef() {
   if (!model) {
      bo.classList.add('night');
      mo.classList.add('bi-moon-fill');
      mo.classList.remove("bi-sun-fill");
      model = 1;
   }
   else{
      bo.classList.remove('night');
      mo.classList.remove('bi-moon-fill');
      mo.classList.add("bi-sun-fill");
      model =0;
   }
}