//
// CineTitle.js
// 
let CineTitleFactory = (function() {

    // privates property backing store
    const privates = new WeakMap();

    // public class
    return class CineTitle {
        constructor ( 
            {
                title       = '(no title)', 
                isFilm      = false, 
                season      = 'S01', 
                episode     = 'E01', 
                elapsedTime = new Date()
            } = {}
        ) 
            {
                privates.set(this, { title });
                privates.set(this, { isFilm });
                privates.set(this, { season });
                privates.set(this, { episode });
                privates.set(this, { elapsedTime });
            }
    
        //
        // title
        getTitle() { return privates.get(this).title; }
        setTitle(title) { privates.get(this).title = title; }

        //
        // isFilm
        getIsFilm() { return privates.get(this).isFilm; }
        setIsFilm(isFilm) { privates.get(this).isFilm = isFilm; }

        //
        // season
        getSeason() { return privates.get(this).season; }
        setSeason(season) { privates.get(this).season = season; }

        //
        // episode
        getEpisode() { return privates.get(this).episode; }
        setEpisode(episode) { privates.get(this).episode = episode; }

        //
        // elapsedTime
        getElapsedTime() { return privates.get(this).elapsedTime; }
        setElapsedTime(elapsedTime) { privates.get(this).elapsedTime = elapsedTime; }
        
    }
})();

module.exports = CineTitleFactory;