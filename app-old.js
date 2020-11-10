


//Vamos a trabajar con archivos que ya vienen instalados por defecto en Node. No tenemos que instalar el paquete HTTP porque ya viene instalado.

const http = require('http');

//Para poder escuchar peticiones http primero tenemos que crear el servidor.
http.createServer( (req, res) =>{

    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Carolina',
        edad: 0,
        url: req.url
    }
    
    res.write(JSON.stringify(salida));
    //res.write('Hola Mundo');
    res.end();

})

//Hay que especificar qué puerto es el que va a estar escuchando. Pueden ser muchos puertos y configuramos el que esté libre. Por lo general va al puerto 3000 o al 8080 si estamos probando localmente.

.listen(8080);

console.log('Escuchando el puerto 8080.');

//En consola: node app
//En el navegador web: localhost:8080
//Si hago cambios tengo que bajar el servidor con ctrl+C en consola y volverlo a levantar (node app).

//Acá escuchábamos todas las peticiones, no importa de qué url fueran.