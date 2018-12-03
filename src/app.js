// 
// app.js
// 

// 
// run tests
const globals = require('./_globals');
if ( globals.TESTS_RUN_TESTS ) {
    const tests = require('./tests/__all-tests');
    tests.run_tests();
}

//
// everything else!
//