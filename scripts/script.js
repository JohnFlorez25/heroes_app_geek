//Importar el archivo data.js

import { data }  from '../data/data.js';

console.log(data);

//zona de variables capturas desde el html
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

//El evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

    //invocar a la funcion para cargar las imagenes en el DOM (loadImagesInDOM)
    //y le envíamos el parametro de data
    loadImageInDOM(data);
});

const loadImageInDOM = data => {

    //capturas uno a uno los elementos que se encuentran en el arreglo de objetos "data"
    data.forEach( heroe => {
        
        templateCard.querySelector('h5').textContent = heroe.superhero;
        templateCard.querySelector('img').setAttribute('src', heroe.image);
        templateCard.querySelector('img').dataset.id = heroe.id;

        //cloneNode
        const clone = templateCard.cloneNode(true);
        //adicionamos los clones al fragment
        fragment.appendChild(clone)
    })
    //adicionar el fragmen a nuestros ITEMS
    items.appendChild(fragment);
}











