const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 8083;

// https://nodejs.org/api/http.html

/*
const server = http.createServer((request, response) => {
    // Indica al servidor que todo está OK (HTTP 200) y que la data está en formato de texto plano:
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });

    // Escribe texto en el cuerpo de la página:
    response.write("UskoKruM2010 - Suscríbete");

    // Indica al servidor que los encabezados y el cuerpo de la respuesta han sido enviados:
    response.end();
});
*/

let index = (request, response) => {
    response.statusCode = 200;
    response.writeHead(200);
    // response.write("Hola mundo! desde 'index'.");
    response.end("Hola mundo! desde 'index' - end().");
};

let indexJSON = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.writeHead(200);
    let objeto = {
        "canal": "UskoKruM2010",
        "edad": 29,
        "cursos": ["PHP", "Python", "JavaScript", "Node.js", "C#", "Java"]
    }
    response.end(JSON.stringify(objeto));
    // response.end('{"mensaje": "Contenido en formato JSON."}');
};

let indexHTML = (request, response) => {
    /*
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200);
    response.end(`<html><body><h1>Esto es contenido HTML.</h1></body></html>`);
    */
    let archivoHTML = fs.readFileSync(__dirname + "/contenido.html");
    response.setHeader('Content-Type', 'text/html');
    response.writeHead(200);
    response.end(archivoHTML);
};

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);
    // console.log(request.headers);
    // console.log(request.headers['user-agent']);

    if (request.url === '/') {
        return index(request, response);
    }
    if (request.url === '/json') {
        return indexJSON(request, response);
    }
    if (request.url === '/html') {
        return indexHTML(request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});

server.listen(port, host, () => {
    console.log(`Servidor corriendo en: http://${host}:${port}`);
});