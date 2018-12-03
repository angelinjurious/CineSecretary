// 
// messenger.js
// 
const messengerFn = () => {
    
    //
    // create EventsEmitter
    const events = require('events');
    const eventsEmitter = new events.EventEmitter();
    
    //
    // create message event handler
    const messageHandler = ( msg ) => {
        console.log(`From message event handler: ${msg}`);
    };
    eventsEmitter.on('message', messageHandler);

    //
    // create info event handler
    const infoHandler = ( msg ) => {
        console.info(`TestingContext: ${msg}`);
    };
    eventsEmitter.on('info', infoHandler);

    //
    // create error event handler
    const errorHandler = ( err, msg ) => {
        if ( msg === undefined ) {
            msg = '(no user specified message)';
        }
        console.error(`TestingContext: Error: ${err} (${msg})`);
    }
    eventsEmitter.on('error', errorHandler);
    
    //
    // create return object (singleton)
    return {
        message:    msg => { 
                        eventsEmitter.emit('message', msg); 
                    },
        info:       msg => { 
                        eventsEmitter.emit('info', msg); 
                    },
        error:      (err, msg) => { 
                        eventsEmitter.emit('message', err, msg); 
                    }
    };

};

module.exports = messengerFn();