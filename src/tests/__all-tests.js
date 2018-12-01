// 
// __all-tests.js
// 
const tester = ( context ) => {

    // find files in test dir
    const fs = require('fs');
    const testsDir = __dirname;
    const files = fs.readdirSync(testsDir);

    // filter out non-test files
    const path = require('path');
    const testFiles = [];


    console.log();


    files.forEach(
        f => {
            if ( 
                    f.endsWith('.js') 
                &&  !(__filename.toLowerCase().endsWith(f))
                ) 
            {
                const testFilePath = `./${f}`;
                testFiles.push(testFilePath);
            }      
        }
    );

    // run the tests
    testFiles.forEach(
        tf => {
            console.log('Loading test...');
            const test = require(tf);
            console.log(`Running test: ${test.test_name}`);
            test.run_test();
            console.log(`Completed test: ${test.test_name}`);
        }
    );
};
  
module.exports = {
    run_tests:  tester,
    test_name:  ""
};