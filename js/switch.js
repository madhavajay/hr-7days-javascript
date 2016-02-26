/* jshint node: true */
'use strict';

function processData(num) {
	// default
	var answer = 'PLEASE TRY AGAIN';

	// switch on num
	switch (num) {
	    case 1:
	        answer = 'ONE';
	        break;
	    case 2:
	        answer = 'TWO';
	        break;
	    case 3:
	        answer = 'THREE';
	        break;
	    case 4:
	        answer = 'FOUR';
	        break;
		case 5:
	        answer = 'FIVE';
	        break;
		case 6:
	        answer = 'SIX';
	        break;
		case 7:
	        answer = 'SEVEN';
	        break;
		case 8:
	        answer = 'EIGHT';
	        break;
		case 9:
	        answer = 'NINE';
	        break;
	    default:
	        break;
	} 

	console.log(answer);
}

exports.processData = processData;