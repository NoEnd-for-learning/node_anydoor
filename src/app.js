const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/default-config');
const route = require('./helper/route');

class Server {
    constructor (config) {
        this.conf = Object.assign({}, conf, config);
    }

    start() {
        const { root, port, hostname } = this.conf;
        const server = http.createServer((req, res) => {
            const filePath = path.join(root, req.url);
            route(req, res, filePath, this.conf);
        });

        server.listen(port, hostname, () => {
            const address = `http://${hostname}:${port}/`;
            console.log(`Server listening at ${chalk.blue(address)}`);
        });
    }
}

module.exports = Server;
