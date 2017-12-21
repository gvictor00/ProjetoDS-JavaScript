module.exports.index = function(application, req, res){
	res.send('./public/index.html');
}

module.exports.autenticar = function(application, req, res){
	console.log('Recebeu autenticar!');
	res.send('./public/index.html');
}