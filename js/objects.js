/* jshint node: true */
'use strict';

function processData(input) {
	var values = input.split(' ');
	var car = {
		type: values[0],
		model: values[1],
		color: values[2]
	};
	
	console.log(car);
}

exports.processData = processData;