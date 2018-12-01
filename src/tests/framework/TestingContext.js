// 
// __TestingContext.js
// 
let TestingContextFactory = () => {

    // private property backing 
    const privates = new WeakMap();

    // public class
    return class TestingContext {
        constructor( 
            { 
                title       = '', 
                isFilm      = false, 
                season      = 'S01', 
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