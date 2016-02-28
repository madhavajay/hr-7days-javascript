/* jshint node: true */
'use strict';

function processData(input) {
	var lines = input.split('\n');
	var rows = parseInt(lines[0]);
	for(var i = 0; i < rows; i++) {
		var index = i + 1; // offset
		var word = lines[index];
		var shortestLength = findShortestPalindrome(word);
		console.log(shortestLength);
	}

	function findShortestPalindrome(word) {
		// number of operations required
		var operations = 0;

		// loop through index of word checking its mirror
		var wordLength = word.length;
		var wordArray = word.split('');
		
		// we dont care about the middle letter if its an odd number
		var mirrorLength = Math.floor(wordLength / 2);

		for(var i = 0; i < mirrorLength; i++) {
			var leftIndex = i;
			var rightIndex = wordLength - (1 + i);
			var distance = word.charCodeAt(leftIndex) - word.charCodeAt(rightIndex);
			operations += Math.abs(distance);
			if (distance < 0) {
				// we need to set the right letter to the left letter
				wordArray[rightIndex] = word[leftIndex];
			} else if (distance > 0) {
				// we need to set the left letter to the right letter
				wordArray[leftIndex] = word[rightIndex];
			}
		}

		return operations;
	}
}


exports.processData = processData;