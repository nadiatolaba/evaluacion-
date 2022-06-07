let dimensionA: number = Number(prompt("Ingresar la dimensión del arreglo"));
let vectorEjMenor: number[] = new Array(dimensionA);

function encontrarNumAleatorio(tope: number) {
  return Math.floor(Math.random() * tope);
}
function cargarVector(v: number[]) {
  for (let indice: number = 0; indice < v.length; indice++) {
    v[indice] = encontrarNumAleatorio(100);
  }
}
function mostrarVector(v: number[]) {
  for (let indice: number = 0; indice < v.length; indice++) {
    console.log(v[indice]);
  }
}
function encontrarMenor(v: number[]): number {
  let numMenor: number = v[0];
  for (let indice = 1; indice < v.length; indice++) {
    if (v[indice] < numMenor) {
      numMenor = v[indice];
    }
  }
  return numMenor;
}
cargarVector(vectorEjMenor);
mostrarVector(vectorEjMenor);
let resultado = encontrarMenor(vectorEjMenor);
console.log("El número menor del arreglo es:", resultado);
