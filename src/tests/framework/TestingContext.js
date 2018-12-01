// 
// __TestingContext.js
// 
let TestingContextFactory = () => {

    const privates = new WeakMap();

    return class TestingContext {
        constructor( 
            { 
                title       = '', 
                isFilm      = false, 
                season      = 'S01', 6
                episode     = 'E01', 
                timeElapsed = new Date() 
            } = {} 
        ) {
            
            privates.set( this, { title } );
            privates.set( this, { isFilm } );
            privates.set( this, { season } );
            privates.set( this, { episode } );
            privates.set( this, { timeElapsed } );
        }
    }
        
}