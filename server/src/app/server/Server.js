var http = require("http");

var Server = function(executor)
{
	this.executor = executor;
	var self = this;

	http.createServer(function(request, response) {
		if(request.url.indexOf("/list") > -1)
		{
			self.handleScriptListRequest(request, response);
		}
		else if(request.url.indexOf("/run") > -1)
		{
			self.handleScriptRequest(request, response);
		}

		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Done");
		response.end();
	}).listen(8888);
};

Server.prototype.handleScriptRequest = function(request, response)
{
	var scriptName = request.url.replace("/run/", "");
	this.executor.execute(scriptName);
};

Server.prototype.handleScriptListRequest = function(request, response)
{

};

module.exports = Server;