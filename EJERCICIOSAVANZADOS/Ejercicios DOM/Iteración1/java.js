//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const boton= document.querySelector(".showme")

console.log(boton.textContent);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector("#pillado");

console.log(h1Pillado.textContent);
//1.3 Usa querySelector para mostrar por consola todos los p
const ps$$ = document.querySelectorAll("p");

for (const parrafo of p) {
    
    console.log (parrafo.textContent);}
//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemones = document.querySelectorAll(".pokemon");

for (const pokemons of pokemones) {
    
    console.log (pokemons.textContent);}
//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
//data-function="testMe".
const tests = document.querySelectorAll('[data-function="testMe"]');

for (const test of test) {
    
    console.log (test.textContent);}
//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
//data-function="testMe".

const testeame2 = document.querySelectorAll('[data-function="testMe"]');

console.log (testeame2[3].textContent);