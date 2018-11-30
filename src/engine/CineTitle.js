//
// CineTitle.js
//
let CineTitle = (function() {
    const Private = new WeakMap();
    return class CineTitle {
        constructor( 
            {
                title       = '(no title)', 
                isFilm      = false, 
                season      = 'S01', 
                episode     = 'E01', 
                elapsedTime = new Date()
                } = {}) 
            {
            Private.set(this, { title });
            Private.set(this, { isFilm });
            Private.set(this, { season });
            Private.set(this, { episode });
            Private.set(this, { elapsedTime });
        }
    
        //
        // title
        get Title() {
            return Private.get(this).title;
        }
        set Title(title) {
            Private.get(this).title = title;
        }

        //
        // isFilm
        get IsFilm() {
            return Private.get(this).isFilm;
        }
        set IsFilm(isFilm) {
            Private.get(this).isFilm= isFilm;
        }

        //
        // season
        get Season() {
            return Private.get(this).season;
        }
        set Season(season) {
            Private.get(this).season = season;
        }

        //
        // episode
        get Episode() {
            return Private.get(this).episode;
        }
        set Episode(episode) {
            Private.get(this).episode = episode;
        }

        //
        // elapsedTime
        get ElapsedTime() {
            return Private.get(this).elapsedTime;
        }
        set ElapsedTime (elapsedTime) {
            Private.get(this).elapsedTime = elapsedTime;
        }
    }
})();