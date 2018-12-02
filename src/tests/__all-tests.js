// 
// __all-tests.js
// 
const testerFn = () => {
    
    // find files in test diretory
    const fs = require('fs');
    const files = fs.readdirSync(__dirname);

    // filter out non-test files
    const testFiles = [];
    files.forEach(
        f => {
            if ( f.toLowerCase().endsWith('.js' ) ) {
                if (!(__filename.toLowerCase().endsWith(f.toLowerCase()))) {
                    const filename = `./${f}`;
                    testFiles.push(filename);
                }
            }
        }
    );

    // run the tests
    testFiles.forEach(
        f => {
            console.log(`Loading test (${f})...`)
            const test = require(f);
            console.log(`Running test: ${test.test_name}`)
            test.run_test();
        }
    );

};

module.exports = {
    run_tests:  testerFn
};