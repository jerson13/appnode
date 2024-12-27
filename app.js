const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
const { error } = require('console');

/*rytas*/

const users = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded ({
    extended: true
}));

app.use(cors());

app.disable('z-powered-by');

app.set('port',3000);


//llamando a las rutas
users(app);

server.listen(3000, '192.168.1.119' || 'localhost', function(){
    console.log('aplicacion js '+ process.pid + port + 'iniciada....')
});


app.get('/', (req, res) =>{
    res.send('ruta raiz del backend');
});
app.get('/test', (req, res) =>{
    res.send('ruta test del backend');
});

//manejo de error

app.use((err, req,  res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

module.exports = {
    app: app,
    server: server
}
//202 RESPUESTA EXITOSA
//404 URL NO EXISTE
//500 ERROR INTERNO CODIGO