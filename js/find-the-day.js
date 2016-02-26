/* jshint node: true */
'use strict';

function processData(myDate) {
	// format is MM/DD/YYYY
	// -1 means do nothing

	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
				'Thursday', 'Friday', 'Saturday'];

	if (myDate !== '-1' && myDate !== -1) {
		var parts = myDate.split('/');
		// month is 0 indexed
		var date = new Date(parts[2], parts[0] - 1, parts[1]);
		console.log(days[date.getDay()]);
	}
}

exports.processData = processData;