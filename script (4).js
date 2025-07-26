function calcularResultado(){
  const v1 = parseFloat(document.getElementById("num1").value || 0);
  const v2 = parseFloat(document.getElementById("num2").value || 0);
  
  const soma = v1 + v2;
  const divisao = v1 / v2;
  const multi = v1 * v2;
  const sub = v1 - v2;
  
  document.getElementById("resultado").innerText = "Soma: " + soma;
  document.getElementById("resultadodiv").innerText = "Divisão: " + divisao;
  document.getElementById("resultadomulti").innerText = "Multiplicação: " + multi;
  document.getElementById("resultadosub").innerText = "Subtração: " + sub;
  
}