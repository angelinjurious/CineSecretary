// 
// testing-context-test.js
// 
const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('TestingContext must be supplied.');
    }
 
    context.messenger.message('Creating context...');
    context.messenger.message('Created context!');
    
};

module.exports = {
    run_test:   testerFn,
    test_name:  'Testing Context Test',
    is_async:   false
};