// 
// testing-context-test.js
// 
const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('TestingContext must be supplied.');
    }
 
    context.messenger.info('Creating %cinfo!', 'font-weight: bold; color: green;');
    context.messenger.message('Created message!');
    context.messenger.error('%sCreated error!', 
        'color:red; font-weight: bold;');
    
};

module.exports = {
    run_test:   testerFn,
    test_name:  'Testing Context Test',
    is_async:   false
};