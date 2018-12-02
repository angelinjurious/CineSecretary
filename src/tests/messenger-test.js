// 
// messenger-test.js
// 
const testerFn = context => {

    if ( context === undefined ) {
        //throw new ReferenceError('Test requires TestingContext.');
    }
    
    // const events = require('events');
    // class EventsEmitter extends events {}
    // const emitter = new EventsEmitter();
    // emitter.on()



};

module.exports = {
    run_test:   testerFn,
    test_name:  'Test Context Messenger Test',
    is_async:   false
};