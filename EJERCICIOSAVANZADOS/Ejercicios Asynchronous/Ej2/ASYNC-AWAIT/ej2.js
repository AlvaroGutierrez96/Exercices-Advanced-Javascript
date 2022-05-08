/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
; */


const baseUrl = 'https://api.nationalize.io'

const concatenar = async() => {
   let inputContent = document.querySelector('input').value;
   const result = await fetch (`${baseUrl}`);
   const resultToJson = await result.json();
   return resultToJson

}
  


let btn = document.querySelector('button');
btn.addEventListener ('click', () => concatenar());
