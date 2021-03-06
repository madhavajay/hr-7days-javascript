/* jshint node: true */
'use strict';

function processData(myArray) {
	var max = Math.max.apply(Math, myArray);
	var reverseSort = myArray.sort((a, b) => b - a);
	var secondMax = max;
	for(var i = 0; i < reverseSort.length; i++) {
		var value = reverseSort[i];
		if (value < secondMax) {
			secondMax = value;
			break;
		}
	}

	console.log(secondMax);
}

exports.processData = processData;