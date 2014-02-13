var Executor = require("./executor/Executor.js"),
	Server = require("./server/NodeServer.js"),
	MultiCastListener = require("./discovery/MultiCastListener.js");

var Application = function() {};

Application.prototype.initialize = function(rootElement)
{
	this.rootElement = rootElement;

	var executor = new Executor();
	var server = new Server(executor);
	var discovery = new MultiCastListener();
};

module.exports = new Application();