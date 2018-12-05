// nedb-test-1.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~/tests/
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  4 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }

    // set up context data
    context.current_test_name = 'NeDB Test 1';
    context.is_current_test_started = true;
    
    // 
    context.messenger.message(`__dirname: ${__dirname}`);

    // TODO: fix this!
    const dbfiledir = 'c:/Users/Owner/dev/CineSecretary/CineSecretary/src/';
    const Datastore = require('nedb');
    const db = new Datastore( {filename: dbfiledir } );
    }})

    // set up context data
    context.is_current_test_completed = true;

};

module.exports = {
    run_test:   testerFn,
    test_name:  'NeDB Test 1',
    is_async:   false,
    enabled:    true,
};