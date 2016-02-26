/* jshint node: true */
'use strict';

function processData(library) {
	library.sort(function(a, b) {
    	return a.title.localeCompare(b.title);
	});

	console.log(library);
}

exports.processData = processData;