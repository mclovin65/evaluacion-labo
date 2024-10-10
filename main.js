import { navBarDiv } from "./componentes/componente1/componente1.js";

import { section2 } from "./componentes/componente2/componente2.js";
import { contendorform } from "./componentes/componente3/componente3.js";



let DOM = document.querySelector("#root");


let navBar = document.createElement('section');
navBar.className = "nav-bar";
navBar.appendChild(navBarDiv);
DOM.appendChild(navBar);

let proyect = document.createElement('section');
proyect.className = "proyect";
proyect.appendChild(section2);
DOM.appendChild(proyect);

let formulario=document.createElement(`section`);
formulario.className="formulario";
formulario.appendChild(contendorform);
DOM.appendChild(formulario);




