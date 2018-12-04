// 
// console-test.js
// 
const tester = ( context ) => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }

    console.log('Console Test: %cThis should be styled.', 
        'color: green; '
        + 'font-weight: bold; '
        + 'text-decoration: underline'
        );

    

};

module.exports = {
    run_test:   tester, 
    test_name:  'Console Test',
    is_async:   false,
    enabled:    false,
};