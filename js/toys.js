/* jshint node: true */
'use strict';

function processData(input) {
	var lines = input.split('\n');
	var values = lines[0].split(' ');
	var money = parseInt(values[1]);
	var prices = lines[1].split(' ').map(
		x => parseInt(x)
	).sort(
		(a, b) => a - b
	);

	var numToys = 0;
	for(var x of prices) {
		money -= x;
		if (money >= 0) {
			++numToys;
		}
	}

	console.log(numToys);
}

exports.processData = processData;