//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div = document.createElement("div");

document.body.appendChild(div);
//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const div2 = document.createElement("div");
const p2 = document.createElement("p");
//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div3 = document.createElement("div");

for (let i = 0; i < 6; i++) {
    
    const p3$$ = document.createElement("p");
    div3.appendChild(p3);
    document.body.appendChild(div3);}
//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const p4 = document.createElement("p");

p4.textContent = "Soy dinámico!";

document.body.appendChild(p4);

    
//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");

h2.textContent = "Wubba Lubba dub dub";
//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//Recuerda que no solo puedes insertar elementos con .appendChild.
const p8 = document.createElement("p");

p8.textContent = "Voy en medio!";

const div8 = document.querySelectorAll("div");

document.body.insertBefore(p8, div8[1]);
//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here