/* jshint node: true */
'use strict';

var fixtures = {
    objectInfoLibrary: [
        {
            title: 'Bill Gates',
            author: 'The Road Ahead',
            readingStatus: true,
        },
        {
            title: 'Steve Jobs',
            author: 'Walter Isaacson',
            readingStatus: true,
        },
        {
            title: 'Mockingjay: The Final Book of The Hunger Games',
            author: 'Suzanne Collins',
            readingStatus: false,
        }
    ],
    objectSortLibrary: [
        {
            author: 'Bill Gates',
            title: 'The Road Ahead',
            libraryID: 1254
        },
        {
            author: 'Steve Jobs',
            title: 'Walter Isaacson',
            libraryID: 4264
        },
        {
            author: 'Suzanne Collins',
            title: 'Mockingjay: The Final Book of The Hunger Games',
            libraryID: 3245
        }
    ]
};

exports.fixtures = fixtures;