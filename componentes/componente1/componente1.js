let navBarDiv = document.createElement('div');
navBarDiv.className = "iv";

let imgLogo = document.createElement('img');
imgLogo.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zLlZ7bQaAnN3VbIgnvfZegAAAA%26pid%3DApi&f=1&ipt=719eb908ee0aedc699c878156dad8cdb96e6c73264b35da11541d96c3549a440&ipo=images";
imgLogo.className = "img-logo";
navBarDiv.appendChild(imgLogo);

let h2 = document.createElement('p');
h2.innerText = "el pinguino es el logo de linux llamado tunx";
navBarDiv.appendChild(h2);


export { navBarDiv };