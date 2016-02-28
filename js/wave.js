/* jshint node: true */
'use strict';

function processData() {
	var wave = String.fromCharCode(9585) + String.fromCharCode(9586);
	var waves = 7;
	var rows = 14;
	
	for(var i = 0; i < rows; i++) {
		var row = new Array(waves + 1).join(wave);
		console.log(row);
	}
}


exports.processData = processData;