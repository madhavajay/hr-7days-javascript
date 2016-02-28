/* jshint node: true */
'use strict';

var my_function = (some_array) => some_array.map(
	number => number % 2 === 0 ? ++number : --number
);

exports.my_function = my_function;