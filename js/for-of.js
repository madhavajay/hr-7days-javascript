/* jshint node: true */
'use strict';

function processData(my_array) {
	for(var x of my_array) {
		if(x === x.split('').reverse().join('')) {
			console.log(x);
		}
	}
}

exports.processData = processData;