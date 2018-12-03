// 
// messenger-test.js
// 
const testerFn = context => {

    if ( context === undefined ) {
        throw new ReferenceError('Test requires TestingContext.');
    }
    
    console.log('Creating events.EventsEmitter...');
    const events = require('events');
    const eventsEmitter = new events.EventEmitter();
    
    // create message event handler
    console.log('Creating message hander...');
    const messageHandler = ( msg ) => {
        console.log(`From message event handler: ${msg}`);
    };

    console.log('Setting up \'message\' event...');
    eventsEmitter.on('message', messageHandler);

    console.log('Firing event...');
    eventsEmitter.emit('message', 'This is a test message!');


};

module.exports = {
    run_test:   testerFn,
    test_name:  'Test Context Messenger Test',
    is_async:   false
};