/* jshint node: true */
'use strict';

function processData() {
	var my_num = 1;
	var my_bool = true;
	var my_str = 'string';

	return {
		my_num: my_num,
		my_bool: my_bool,
		my_str: my_str
	};
}

exports.processData = processData;