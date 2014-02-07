var Executor = require("./executor/Executor.js"),
	Server = require("./server/Server.js");

var Application = function() {};

Application.prototype.initialize = function(rootElement)
{
	this.rootElement = rootElement;

	this.rootElement.querySelector("#run").addEventListener("click", function() {
		var executor = new Executor("C:\\dev\\macropad\\ahk\\chrome.ahk");
		executor.execute();
	});

	var executor = new Executor();
	var server = new Server(executor);
};

module.exports = new Application();