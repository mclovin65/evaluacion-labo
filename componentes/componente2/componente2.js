let section2=document.createElement(`div`);
section2.className="componente2";


let titulo=document.createElement(`h2`);
titulo.className="titulo";
titulo.innerText="caracteristicas"
section2.appendChild(titulo);

let listado=document.createElement(`li`);
listado.className="listado";
section2.appendChild(listado);
listado.innerText="item1";

let listado1=document.createElement(`li`);
listado1.className="listado";
section2.appendChild(listado1);
listado1.innerText="item2";

let listado2=document.createElement(`li`);
listado2.className="listado";
section2.appendChild(listado2);
listado2.innerText="item3";




export{section2};