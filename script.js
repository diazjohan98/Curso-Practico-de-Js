const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#boton");
const pResultado = document.querySelector("#result");

boton.addEventListener("click", btnClick);

function btnClick() {
  const sumainput = Number(input1.value) + parseInt(input2.value);
  pResultado.innerText = "Resultado: " + sumainput;
}
