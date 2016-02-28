/* jshint node: true */
'use strict';

function processData() {
	const PI = Math.PI;
	const EULER = Math.E;
	const SQRT2 = Math.SQRT2;

	return {
		PI: PI,
		EULER: EULER,
		SQRT2: SQRT2
	};
}

exports.processData = processData;