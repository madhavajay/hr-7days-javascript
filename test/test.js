/* jshint node: true */
'use strict';

// include chai assert
var assert = require('assert');

// include utils
var utils = require('../js/utils.js');

// test fixtures
var fixtures = require('./fixtures.js').fixtures;

// include challenges
var helloworld = require('../js/helloworld.js');
var printTheInput = require('../js/print-the-input.js');
var ifElse = require('../js/if-else.js');
var switchCase = require('../js/switch.js');
var newVar = require('../js/new-var.js');
var arithmetic = require('../js/arithmetic.js');
var objects = require('../js/objects.js');
var objectInfo = require('../js/object-info.js');
var objectSort = require('../js/object-sort.js');
var secondLargest = require('../js/second-largest.js');
var findTheDay = require('../js/find-the-day.js');

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

    it('objects', function() {
        objects.processData('Fiat 500 White');
        assert.equal(hook.captured(), "{ type: 'Fiat', model: '500', color: 'White' }\n");
    });

    it('object info', function() {
        objectInfo.processData(fixtures.objectInfoLibrary);
        var expectedOutput = "Already read 'Bill Gates' by The Road Ahead.\n" +
                             "Already read 'Steve Jobs' by Walter Isaacson.\n" +
                             "You still need to read 'Mockingjay: The Final Book" +
                             " of The Hunger Games' by Suzanne Collins.\n";
        assert.equal(hook.captured(), expectedOutput);
    });

    it('object sort', function() {
        objectSort.processData(fixtures.objectSortLibrary);
        var expectedOutput = "[ { author: 'Suzanne Collins',\n" +
                             "    title: 'Mockingjay: The Final Book of The Hunger Games',\n" +
                             "    libraryID: 3245 },\n" +
                             "  { author: 'Bill Gates',\n" +
                             "    title: 'The Road Ahead',\n" +
                             "    libraryID: 1254 },\n" +
                             "  { author: 'Steve Jobs',\n" +
                             "    title: 'Walter Isaacson',\n" +
                             "    libraryID: 4264 } ]\n";
        assert.equal(hook.captured(), expectedOutput);
    });

    it('second largest', function() {
        secondLargest.processData([2, 3, 6, 6, 5]);
        assert.equal(hook.captured(), '5\n');
        hook.clear();
        secondLargest.processData([5, 5, 5, 5, 5]);
        assert.equal(hook.captured(), '5\n');
        hook.clear();
        secondLargest.processData([-1, -1, -3, 5]);
        assert.equal(hook.captured(), '-1\n');
        hook.clear();
    });

    it('second largest', function() {
        findTheDay.processData('10/11/2009');
        assert.equal(hook.captured(), 'Sunday\n');
        hook.clear();
        findTheDay.processData('11/10/2010');
        assert.equal(hook.captured(), 'Wednesday\n');
        hook.clear();
        findTheDay.processData('02/01/2016');
        assert.equal(hook.captured(), 'Monday\n');
        hook.clear();
        findTheDay.processData('-1');
        assert.equal(hook.captured(), '');
        hook.clear();
    });

});