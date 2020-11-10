

const express = require('express');
const app = express();//Se declara una variable app que es el producto de la función de express.
const hbs = require('hbs');
require('./hbs/helpers');//Importación. No hace falta guardarlo en una variable.

const port = process.env.PORT || 3000;//Heroku nos permite el acceso a unas variables de entorno globales.
//Este objeto corriendo localmente no va a existir. Entonces, si no existe, asigno el puerto 3000.

//Middleware: un callback que se ejecuta siempre, no importa qué url pida el usuario:
app.use(express.static(__dirname + '/public'));//Antes de dirname hay 2 giones bajos.
//Esto puede generar conflictos con el app.get de abajo. Por eso comenté lo de abajo.
//La carpeta public es pública y los archivos quedan disponibles para cualquier persona.
 
// app.get('/', function (req, res) {//Se configura una solicitud GET con slash
//   //res.send('Hola Mundo')
//     let salida = {
//         nombre: 'Carolina',
//         edad: 0,
//         url: req.url
//     }
//     res.send(salida);
// })

 
// app.get('/data', function (req, res) {//Se configura una solicitud GET con slash 
//     res.send('Hola Data');
//   })

hbs.registerPartials(__dirname + '/views/parciales');//__dirname = No importa dónde esté ubicada nuestra aplicación, todo ese path se concatena con la ruta que le paso. De esta manera le indicamos a handlebars que en este directorio se van a guardar todos los parciales.

//Express HBS engine:
app.set('view engine', 'hbs');//app hace referencia al express de arriba

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'carolina'//Si esta variable no existiera aquí, el programa va a buscar si hay algo en los helpers.
        // ,anio: new Date().getFullYear()
    });//Renderiza el archivo home.hbs
    //Cualquier petición nueva que entre por acá va a renderizar el sitio nuevamente.
});

//Otro path:
app.get('/about', function (req, res) {
    res.render('about'
    //,{anio: new Date().getFullYear()} Como se repetía lo puse en un helper.
    );
});

app.listen(port, ()=> {//No sé qué puerto me va a dar Heroku para correr mi aplicación.
    console.log(`Escuchando peticiones en el puerto ${port}.`);
})

//Con node server.js cargamos el paquete express y comienza a correr la aplicación.
//Pero Heroku no sabe cuál es el archivo que se tiene que ejecutar ni qué comandos se tienen que ejecutar.