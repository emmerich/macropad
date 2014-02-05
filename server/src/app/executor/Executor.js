var child_process = require("child_process"),
	AUTO_HOT_KEY = "\"C:\\Program Files\\AutoHotkey\\AutoHotkey.exe\"";

/**
 * Executes scripts.
 * @param scriptPath the path to the script to execute.
 * @constructor
 */
var Executor = function(scriptPath)
{
	this.scriptPath = scriptPath;
};

Executor.prototype.execute = function()
{
	child_process.exec(AUTO_HOT_KEY + " " + this.scriptPath);
};

module.exports = Executor;
