const express = require('express');
const cors = require('cors');
const { use } = require('../routes/usuarios');


class Server {


    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;

        // middlewares
        this.middlewares();

        // rutas de la aplicacion
        this.routes();
    }


    routes() {
        this.app.use('/api/usuarios', require('../routes/usuarios'));
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Lectura y parseo del Body
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(express.json());

        // directorio publico
        this.app.use(express.static('public'));

        
        

    }


    listen() {
        this.app.listen(this.port)
    }

}



module.exports = Server