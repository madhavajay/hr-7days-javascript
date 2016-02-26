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
var switchCase = require('../js/switch.js');
var newVar = require('../js/new-var.js');
var arithmetic = require('../js/arithmetic.js');

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

    it('switch', function() {
        switchCase.processData(1);
        assert.equal(hook.captured(), 'ONE\n');
        hook.clear();
        switchCase.processData(2);
        assert.equal(hook.captured(), 'TWO\n');
        hook.clear();
        switchCase.processData(3);
        assert.equal(hook.captured(), 'THREE\n');
        hook.clear();
        switchCase.processData(4);
        assert.equal(hook.captured(), 'FOUR\n');
        hook.clear();
        switchCase.processData(5);
        assert.equal(hook.captured(), 'FIVE\n');
        hook.clear();
        switchCase.processData(6);
        assert.equal(hook.captured(), 'SIX\n');
        hook.clear();
        switchCase.processData(7);
        assert.equal(hook.captured(), 'SEVEN\n');
        hook.clear();
        switchCase.processData(8);
        assert.equal(hook.captured(), 'EIGHT\n');
        hook.clear();
        switchCase.processData(9);
        assert.equal(hook.captured(), 'NINE\n');
    });

    it('new variable', function() {
        assert.equal(newVar.newVariable, 'My First Variable');
    });

    it('arithmetic', function() {
        var results = arithmetic.processData(1, 2);
        assert.equal(results.add, 3);
        assert.equal(results.sub, -1);
        assert.equal(results.mul, 2);
        assert.equal(results.div, 0.5);
        assert.equal(results.inc, 2);
        assert.equal(results.dec, 1);
    });
    
});