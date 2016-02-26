/* jshint node: true */
'use strict';

function processData(a, b) {
	var add = a + b;
	var sub = a - b;
	var mul = a * b;
	var div = a / b;
	var inc = ++a;
	var dec = --b;

	return {
		'add': add, 
		'sub': sub,
		'mul': mul,
		'div': div,
		'inc': inc,
		'dec': dec
	};
}

exports.processData = processData;