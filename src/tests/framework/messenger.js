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
        console.log(`TestingContext info: ${msg}`);
    };
    eventsEmitter.on('message', messageHandler);

    //
    // create info event handler
    const infoHandler = ( msg, styles ) => {
 
        let isStyles = false;
        // if ( styles === undefined ) {
        //     styles = '';
        //     isStyles = true;
        // }

        // const m = 'TestingContext message: ';
        // if ( isStyles ) {
        //     m += 
        // }
        // ${msg}`;

        const m = 'TestingContext message: ' + `${msg}`;
        console.info('~'.repeat( m.length ));
        if ( isStyles ) {
            console.info( m, styles );
        } else {
            console.info( m );
        }
        console.info('~'.repeat(m.length));
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