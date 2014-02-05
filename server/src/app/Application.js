var Executor = require("./executor/Executor.js");

var Application = function() {};

Application.prototype.initialize = function(rootElement)
{
	this.rootElement = rootElement;

	this.rootElement.querySelector("#run").addEventListener("click", function() {
		var executor = new Executor("C:\\dev\\macropad\\ahk\\chrome.ahk");
		executor.execute();
	});
};

module.exports = new Application();