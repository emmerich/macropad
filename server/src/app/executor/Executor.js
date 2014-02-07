var child_process = require("child_process"),
	AUTO_HOT_KEY = "\"C:\\Program Files\\AutoHotkey\\AutoHotkey.exe\"",
	SCRIPT_BASE_DIRECTORY = "C:\\dev\\macropad\\ahk\\",
	AUTO_HOT_KEY_EXTENSION = ".ahk";

/**
 * Executes scripts.
 * @constructor
 */
var Executor = function()
{
};

Executor.prototype.execute = function(scriptPath)
{
	child_process.exec(AUTO_HOT_KEY + " " + SCRIPT_BASE_DIRECTORY + scriptPath + AUTO_HOT_KEY_EXTENSION);
};

module.exports = Executor;
