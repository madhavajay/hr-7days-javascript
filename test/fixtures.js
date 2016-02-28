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
    ],
    myTemplateString :'My name is Madhava.\nMy id is 1.\n' + 
                      'My address is https://github.com/madhavajay/.',
    letMessage: 'The global index (before for-loop) is :  6\n' +
                'The local index is :  0\n' +
                'The local index is :  1\n' +
                'The global index (after for-loop) is :  6\n',
    toys1: '7 50\n1 12 5 111 200 1000 10',
    toys2: '20 100000\n33324560 77661073 31948330 21522343 97176507 5724692 ' +
           '24699815 12079402 6479353 28430129 42427721 57127004 26256001 ' +
           '29446837 65107604 9809008 65846182 8470661 13597655 360',
    toys3: '7 102\n1 2 50 50 200 1000',
    grid1: '4\n4\n' +
           '1 1 0 0\n' + 
           '0 1 1 0\n' + 
           '0 0 1 0\n' + 
           '1 0 0 0',
    grid2: '5\n5\n' +
           '1 1 0 0 1\n' + 
           '0 1 1 0 1\n' + 
           '0 0 1 0 1\n' + 
           '0 0 0 0 1\n' + 
           '1 1 1 1 1',
    grid3: '3\n5\n' +
           '0 0 0 0 0\n' + 
           '0 1 1 1 0\n' + 
           '0 0 0 0 0',
    loveLetter1: '1\n' + 
                 'abc',
    loveLetter2: '4\n' + 
                 'abc\n' + 
                 'abcba\n' + 
                 'abcd\n' + 
                 'cba\n',
    loveLetter3: '5\n' +
                 'pue\n' +
                 'heubsbn\n' +
                 'feazhaxpux\n' +
                 'hmhcy\n' +
                 'tmp',
    loveLetter4: '10\n' +
                 'vdtzjgsmitfnnrypmfkarhbmgwsghypfdkeoqyaashohyownv\n' +
                 'nm\n' +
                 'qywo\n' +
                 'ey\n' +
                 'vdyfhmvgpvawlhxzfkuozggpgcgb\n' +
                 'evdhtiqgfyvcytohqppcmdbultbnzevdbakvkcdpbatbtjlmzaolfqfqjifkoanqcznmbqbeswglgrzfroswgxoritbw\n' +
                 'qoxpbjstmxlidzowavnqnlwnbpvustpiimzlxsfjrstwtksufhm\n' +
                 'ujgvabptwgbesdqrvxc\n' +
                 'rvilfchnjtgfeoahrrcnxdspgkidjkrahbnpdwcosktyytfpkhch\n' +
                 'wyvigbrssucuhrxetoydhwdbcsnlwxavvwdexxyrralarlgmzergbujfoxslu',
    waves: '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n' +
           '╱╲╱╲╱╲╱╲╱╲╱╲╱╲\n'


};

exports.fixtures = fixtures;