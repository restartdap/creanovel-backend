const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('src/public'));
    }

    routes() {
        this.app.get("/", (req, res) => {
            res.status(200).json({
                message: "Hello World"
            });
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listen on port ${this.port}`);
        });
    }
}

module.exports = Server;