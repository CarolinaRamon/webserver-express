
const hbs = require('hbs');

//HELPERS: 
//Un helper es una función que se dispara cuando el template lo requiere.
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {//idx=index
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});

//No necesito exportarlo. Sí lo requiero en server.js. Cuando lo importe a server.js este código se va a ejecutar.