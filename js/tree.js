/* jshint node: true */
'use strict';

function processData() {
	var treeHeight = 10;
	var numberOfSpaces = treeHeight - 2;
	var numberOfFill = 1;
	for(var i = 1; i <= treeHeight; i++) {
		var fill = '0';
		if (i < 3) {
			if (i === 1) {
				fill = '*';
			}
		} else {
			--numberOfSpaces;
			numberOfFill += 2;
		}

		var line = makeLine(numberOfSpaces, numberOfFill, fill);
		console.log(line);
	}
	
	function makeLine(spaces, numberOfFill, fill) {
		var space = new Array(spaces + 1).join(' ');
		var filler = new Array(numberOfFill + 1).join(fill);
		return space + filler;
	}
}

exports.processData = processData;