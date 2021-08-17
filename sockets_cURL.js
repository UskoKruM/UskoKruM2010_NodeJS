// Socket: Es un concepto abstracto a través del cual se comunican 2 programas que se ejecutan 
// en la red, es como un enlace de comunicación.


const http = require('http');

const host = '127.0.0.1';
const port = 8083;

const routes = {
    '/': (request, response) => {
        response.writeHead(200);
        response.end("Probando Sockets y cURL...");
    }
};

const server = http.createServer((request, response) => {
    console.log(request.url);
    console.log(request.method);

    let ipCliente = request.socket.remoteAddress;
    let conexionCon = request.socket.encrypted ? "SSL" : "HTTP";
    console.log(`Petición (request) recibida: ${conexionCon} ${request.method} ${request.url}`);
    console.log(`IP Cliente: ${ipCliente}`);

    if (request.url in routes) {
        return routes[request.url](request, response);
    }

    response.writeHead(404);
    response.end(http.STATUS_CODES[404]);
});

server.listen(port, host, () => {
    console.log(`Servidor corriendo en: http://${host}:${port}`);
});

/*
const options = {
    host: 'www.google.com',
};
const req = http.get(options);
req.end();
req.once('response', (res) => {
    const ip = req.socket.localAddress;
    const port = req.socket.localPort;
    console.log(`Tu IP es: ${ip} y tu puerto es: ${port}`);
});
*/