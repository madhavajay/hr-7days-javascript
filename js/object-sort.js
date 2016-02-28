/* jshint node: true */
'use strict';

function processData(library) {
	library.sort((a, b) => a.title.localeCompare(b.title));

	console.log(library);
}

exports.processData = processData;