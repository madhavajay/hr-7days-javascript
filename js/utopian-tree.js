/* jshint node: true */
'use strict';

function processData(input) {
	var lines = input.split('\n');
	var cases = parseInt(lines[0]);
	for(var i = 1; i <= cases; i++) {
		var height = 1;
		var cycles = parseInt(lines[i]);
		for(var x = 0; x < cycles; x++) {
			if (x % 2 === 0) {
				height = height * 2;
			} else {
				++height;
			}
		}
		console.log(height);
	}
}

exports.processData = processData;