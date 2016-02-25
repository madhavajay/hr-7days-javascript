/* jshint node: true */
'use strict';

// include chai assert
var assert = require('assert');

// include utils
var utils = require('../js/utils.js');

// include challenges
var helloworld = require('../js/helloworld.js');
var printTheInput = require('../js/print-the-input.js');
var ifElse = require('../js/if-else.js');

describe('challenges', function() {
    var hook;
    beforeEach(function() {
        hook = utils.captureStream(process.stdout);
    });
    afterEach(function() {
        hook.unhook(); 
    });
    
    it('prints hello world', function() {
        helloworld.processData('');
        assert.equal(hook.captured(), 'Hello World!\n');
    });

    it('prints the argument', function() {
        printTheInput.processData('How many chickens does it take to cross the road?');
        assert.equal(hook.captured(), 'How many chickens does it take to cross the road?\n');
    });

    it('if else', function() {
        ifElse.processData(100);
        assert.equal(hook.captured(), 'AA\n');
    });
});