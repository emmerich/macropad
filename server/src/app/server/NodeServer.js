var http = require("http");

var Server = function(executor)
{
	this.executor = executor;
	var self = this;

	http.createServer(function(request, response) {
		request.content = "";
		request.setEncoding("utf8");

		request.addListener("data", function(chunk) {
			request.content += chunk;
		});

		request.addListener("end", function() {
			var data = JSON.parse(request.content);

			if(request.url.indexOf("/list") > -1)
			{
				self.handleScriptListRequest(request, response, data);
			}
			else if(request.url.indexOf("/run") > -1)
			{
				self.handleScriptRequest(request, response, data);
			}
		});
	}).listen(8888);
};

Server.prototype.handleScriptRequest = function(request, response, data)
{
	var scriptName = data.name;
	this.executor.execute(scriptName);

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Done");
	response.end();
};

Server.prototype.handleScriptListRequest = function(request, response, data)
{

};

module.exports = Server;