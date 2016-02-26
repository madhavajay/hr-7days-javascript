/* jshint node: true */
'use strict';

function processData(library) {
	for (var i = 0; i < library.length; i++) {
		var book = library[i];
		var message = "read '" + book.title + "' by " + book.author + ".";
		if (book.readingStatus === true) {
			message = "Already " + message;
		} else {
			message = "You still need to " + message;
		}
		console.log(message);
	}
}

exports.processData = processData;