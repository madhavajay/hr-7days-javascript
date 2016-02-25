/* jshint node: true */
'use strict';

function captureStream(stream) {
    var oldWrite = stream.write;
    var buf = '';
    stream.write = function(chunk, encoding, callback) { // jshint ignore:line
        buf += chunk.toString(); // chunk is a String or Buffer
        oldWrite.apply(stream, arguments);
    };

    return {
        unhook: function unhook() {
            stream.write = oldWrite;
        },
        captured: function() {
            return buf;
        }
    };
}

exports.captureStream = captureStream;