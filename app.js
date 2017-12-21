// Importa o arquivo de configuração do servidor
var app = require('./config/server.js');

var port = 3000;

// Informa a porta de escuta
app.listen(port, function(){
	console.log("Servidor Online na porta ", port);
});