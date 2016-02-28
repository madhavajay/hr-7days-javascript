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
var dataTypes = require('../js/data-types.js');
var arrows = require('../js/arrows.js');
var templateString = require('../js/template-string.js');
var letVar = require('../js/let.js');
var constVar = require('../js/const.js');
var forOf = require('../js/for-of.js');
var toys = require('../js/toys.js');
var utopianTree = require('../js/utopian-tree.js');
var cellGrid = require('../js/cell-grid.js');
var loveLetter = require('../js/love-letter.js');
var wave = require('../js/wave.js');
var tree = require('../js/tree.js');


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

    it('find the day', function() {
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

    it('data types', function() {
        var results = dataTypes.processData();
        assert.equal(results.my_num, 1);
        assert.equal(results.my_bool, true);
        assert.equal(results.my_str, 'string');
    });

    it('arrows', function() {
        var results = arrows.my_function([1, 2, 3, 5, 7, 7, -1, -4, 0]);
        var expectedOutput = [0, 3, 2, 4, 6, 6, -2, -3, 1];
        assert.equal(JSON.stringify(results), JSON.stringify(expectedOutput));
    });

    it('template string', function() {
        var results = templateString.my_template_string;
        assert.equal(results, fixtures.myTemplateString);
    });

    it('let', function() {
        letVar.processData(6, 2);
        assert.equal(hook.captured(), fixtures.letMessage);
    });

    it('let', function() {
        var results = constVar.processData();
        assert.equal(results.PI, 3.141592653589793);
        assert.equal(results.EULER, 2.718281828459045);
        assert.equal(results.SQRT2, 1.4142135623730951);
    });

    it('for of', function() {
        forOf.processData(['1', '12', '1221', '393', '-12321-']);
        assert.equal(hook.captured(), '1\n1221\n393\n-12321-\n');
    });

    it('toys', function() {
        toys.processData(fixtures.toys1);
        assert.equal(hook.captured(), '4\n');
        hook.clear();
        toys.processData(fixtures.toys2);
        assert.equal(hook.captured(), '1\n');
        hook.clear();
        toys.processData(fixtures.toys3);
        assert.equal(hook.captured(), '3\n');
    });

    it('utopian tree', function() {
        utopianTree.processData('3\n0\n1\n4');
        assert.equal(hook.captured(), '1\n2\n7\n');
        hook.clear();
    });

    it('cell grid', function() {
        cellGrid.processData(fixtures.grid1);
        assert.equal(hook.captured(), '5\n');
        hook.clear();
        cellGrid.processData(fixtures.grid2);
        assert.equal(hook.captured(), '9\n');
        hook.clear();
        cellGrid.processData(fixtures.grid3);
        assert.equal(hook.captured(), '3\n');
        hook.clear();
    });

    it('love letter', function() {
        loveLetter.processData(fixtures.loveLetter1);
        assert.equal(hook.captured(), '2\n');
        hook.clear();
        loveLetter.processData(fixtures.loveLetter2);
        assert.equal(hook.captured(), '2\n0\n4\n2\n');
        hook.clear();
        loveLetter.processData(fixtures.loveLetter3);
        assert.equal(hook.captured(), '11\n11\n58\n27\n4\n');
        hook.clear();
        loveLetter.processData(fixtures.loveLetter4);
        assert.equal(hook.captured(), '201\n1\n4\n20\n153\n453\n192\n108\n216\n313\n');
        hook.clear();     
    });

    it('wave', function() {
        wave.processData();
        assert.equal(hook.captured(), fixtures.waves);
        hook.clear();
    });

    it('tree', function() {
        tree.processData();
        assert.equal(hook.captured(), fixtures.tree);
        hook.clear();
    });
});