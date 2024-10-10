import { navBarDiv } from "./componentes/componente1/componente1.js";


let DOM = document.querySelector("#root");


let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

/* proyect */
let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild (proyectos()); //<------- componente
DOM.appendChild(proyect);