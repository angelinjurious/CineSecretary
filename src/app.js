// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// app.js
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  3 December 2018
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  BS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 
// run tests
// 
const globals = require('./_globals');
if ( globals.TESTS_RUN_TESTS ) {
    const tests = require('./tests/__all-tests');
    tests.run_tests();
}

//
// everything else!
// 
const appFn = () => {
    const msgr = require('./tests/framework/messenger');
    msgr.info('Welcome to CineSecretary v1.0 (.0a)');
};
appFn();