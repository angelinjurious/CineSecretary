// 
// testing-context-test.js
// 
const testerFn = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }
 
    context.messenger.info('Creating %cinfo!', 'font-weight: bold; color: green;');
    context.messenger.message('Created message!');
    context.messenger.error('%cCreated error!', 
        'color:red; font-weight: bold;');
    
};

module.exports = {
    run_test:   testerFn,
    test_name:  'Testing Context Test',
    is_async:   false,
    enabled:    false,
};