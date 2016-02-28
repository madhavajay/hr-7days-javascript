/* jshint node: true */
'use strict';

function processData(input) {
	var lines = input.split('\n');
	var rows = parseInt(lines[0]);
	var cols = parseInt(lines[1]);
	var matrix = [];
	for(var i = 0; i < rows; i++) {
		var index = i + 2; // offset
		var row = getRow(index);
		matrix[i] = row;
	}

	var longestChain = 0;
	var possibleChain = 0;
	var alreadyChecked = [];

	function getRow(index) {
		return lines[index].split(' ').map(a => parseInt(a));
	}

	// determine if candidate coordinate is valid
	function isValidCoordinate(x, y) {
		if (x < 0 || (rows - 1) < x) {
			// invalid x coord
			return false;
		} else if (y < 0 || (cols - 1) < y) {
			// invalid x coord
			return false;
		}

		// have we checked this cell before this run?
		var checked = alreadyChecked[x][y];
		if (checked === 1) {
			return false;
		}

		var cell = matrix[x][y];
		if (cell === 0) {
			return false;
		}
		return true;
	}

	// check the cell and neighbours in a clockwise fashion
	function checkCellAndNeighbours(x, y) {
		if (isValidCoordinate(x, y)) {
			alreadyChecked[x][y] = 1;
			possibleChain += 1;

			// check all directions in a stepwise fashion
			for(var x_offset = -1; x_offset <= 1; x_offset++) {
				for(var y_offset = -1; y_offset <= 1; y_offset++) {
					var m = x + x_offset;
					var n = y + y_offset;
					checkCellAndNeighbours(m, n);
				}
			}
		}
	}

	// initializes an empty matrix
	function makeEmptyMatrix(rows, cols) {
		var emptyMatrix = [];
		for(var i = 0; i < rows; i++) {
			var row = new Array(cols + 1).join('0').split('').map(parseFloat);
			emptyMatrix[i] = row;
		}

		return emptyMatrix;
	}

	// iterate through every cell
	for(var x = 0; x < rows; x++) {
		for(var y = 0; y < cols; y++) {
			// zero the values for a new run
			alreadyChecked = makeEmptyMatrix(rows, cols);
			possibleChain = 0;
			
			// start with the first location
			checkCellAndNeighbours(x, y);
			if (possibleChain > longestChain) {
				longestChain = possibleChain;
			}
		}
	}

	console.log(longestChain);
}

exports.processData = processData;