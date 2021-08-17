const http = require('http');
const fs = require('fs');
const host = '127.0.0.1';
const port = 8083;

const routes = {
    '/': (request, response) => {
        response.statusCode = 200;
        response.writeHead(200);
        response.end("Hola mundo! desde 'index' - end().");
    },
    '/json': (request, response) => {
        response.setHeader('Content-Type', 'application/json');
        response.writeHead(200);
        let objeto = {
            "canal": "UskoKruM2010",
            "edad": 29,
            "cursos": ["PHP", "Python", "JavaScript", "Node.js", "C#", "Java"]
        }
        response.end(JSON.stringify(objeto));
    },
    '/html': (request, response) => {
        let archivoHTML = fs.readFileSync(__dirname + "/contenido.html");
        response.setHeader('Content-Type', 'text/html');
        response.writeHead(200);
        response.end(archivoHTML);
    },
    '/csv': (request, response) => {
        response.setHeader('Content-Type', 'text/csv');
        response.setHeader('Content-Disposition', 'attachment;filename=amigos.csv');
        response.writeHead(200);
        response.end('codigo,nombre,email\n123,Oscar Garcia,uskokrum2010@gmail.com');
    }
};

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);

    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});

server.listen(port, host, () => {
    console.log(`Servidor corriendo en: http://${host}:${port}`);
});