
let contendorform = document.createElement('div');
contendorform.className = "contendorform";


let titulodeform = document.createElement('h2');
titulodeform.className = "tituloform";
titulodeform.innerText = "Contactanos";


let div1 = document.createElement('div');
div1.className = "div1";

let div2 = document.createElement('div');
div2.className = "div2";

let comentario = document.createElement('input');

comentario.className = "comentario";

let btn = document.createElement('button');
btn.className = "btn";

let h3 = document.createElement('h2');
h3.className = "textobtn";
h3.innerText = "Enviar"; 

btn.appendChild(h3);


contendorform.appendChild(titulodeform);
contendorform.appendChild(div1);
contendorform.appendChild(div2);
contendorform.appendChild(comentario);
contendorform.appendChild(btn);


export { contendorform };