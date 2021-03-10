const express = require("express");
const cors = require("cors");
const dbConnection = require('./database/database');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.novelasPath = "/api/novelas";
        this.escenasPath = "/api/escenas";
        this.recursosPath = "/api/recursos";

        this.datadase();

        this.middlewares();
        this.routes();
    }

    async datadase() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('src/public'));
    }

    routes() {
        this.app.use(this.novelasPath, require('./routes/novela.route'));
        this.app.use(this.escenasPath, require('./routes/escena.route'));
        this.app.use(this.recursosPath, require('./routes/recurso.route'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        });
    }
}

module.exports = Server;