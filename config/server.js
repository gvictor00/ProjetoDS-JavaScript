// Importa o framework Express
var express = require('express');

// Importa o Consign
var consign = require('consign');

// Importa o BodyParser
var bodyParser = require('body-parser');

// Importa o Morgan para fazer um log das requests no console
var morgan = require('morgan');

// Importa o módulo Express-Session
var expressSession = require('express-session');

// Inicia o objeto Express
var app = express();


// configurar o middleware express.static 
app.use(express.static('./app/public'));

// configurar o middleware body-parser 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

/* configurar o middleware express-session */
app.use(expressSession({
	secret: 'poaskpoaskposakpaskapsokpo',
	// secret = 'string' > Cadeia de caracateres usada para criação e autenticação do cookie criado
	resave: false,
	// resave == true > Sessão é gravada no servidor, mesmo não havendo modificações
	// resave == false >  Sessão é gravada sempre que houver modificações
	saveUninitialized: false
	// saveUninitialized == true > Cria uma nova sessão sempre que houver modificações
}));

/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/views')
	.then('app/controllers')
	.into(app);

/* exportar o objeto app */
module.exports = app;