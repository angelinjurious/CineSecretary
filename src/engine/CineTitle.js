//
// CineTitle.js
// 
let CineTitle = (function() {

    // private property backing store
    const Private = new WeakMap();

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
            Private.set(this, { title });
            Private.set(this, { isFilm });
            Private.set(this, { season });
            Private.set(this, { episode });
            Private.set(this, { elapsedTime });
        }
    
        //
        // title
        getTitle() { return Private.get(this).title; }
        setTitle(title) { Private.get(this).title = title; }

        //
        // isFilm
        getIsFilm() { return Private.get(this).isFilm; }
        setIsFilm(isFilm) { Private.get(this).isFilm = isFilm; }

        //
        // season
        getSeason() { return Private.get(this).season; }
        setSeason(season) { Private.get(this).season = season; }

        //
        // episode
        getEpisode() { return Private.get(this).episode; }
        setEpisode(episode) { Private.get(this).episode = episode; }

        //
        // elapsedTime
        getElapsedTime() { return Private.get(this).elapsedTime; }
        setElapsedTime(elapsedTime) { Private.get(this).elapsedTime = elapsedTime; }
        
    }
})();