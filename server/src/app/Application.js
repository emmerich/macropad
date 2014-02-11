var Executor = require("./executor/Executor.js"),
	Server = require("./server/NodeServer.js");

var Application = function() {};

Application.prototype.initialize = function(rootElement)
{
	this.rootElement = rootElement;

	var executor = new Executor();
	var server = new Server(executor);
};

module.exports = new Application();