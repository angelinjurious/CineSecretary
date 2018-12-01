//
// ___sandbox.js
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//

{
let CineTitleFactory = (function() {
    const Private = new WeakMap();
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
        // public properties
        //
        
        
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
        setEpisode(title) { Private.get(this).episode = episode; }

        //
        // elapsedTime
        getElapsedTime() { return Private.get(this).elapsedTime; }
        setElapsedTime(elapsedTime) { Private.get(this).elapsedTime = elapsedTime; }
        
}();
}

let HillHouseTitleFactory = (function(CineTitle) {
    const Private = new WeakMap();
    return class HillHouseTitle extends CineTitle {
      constructor(
          {
              stars         = [''], 
              season        = 'S02', 
              episode       = 'E05', 
              elapsedTime   = new Date(2018, 0, 0, 1, 30, 30 )
            } = {}
            ) {
        super(
            {
                title:          'Haunting of Hill House',  
                season:         'S02', 
                episode:        'E05', 
                elapsedTime:    new Date(2018, 10, 30, 10, 32, 40)
            });
        Private.set(this, { stars });
      }
      
      getStars() { return Private.get(this).stars; }
      setStars(stars) { Private.get(this).stars = stars; }
  
      // Just for exposition: this should always return undefined,
      // since NamedThing has it's own WeakMap, separate from this one
      getNameFromHere() { return Private.get(this).name; }
    }
  })(HillHouseTitle);  // })(CineTitle);

  
const presto = new HillHouseTitleFactory(
    {
        stars:        [ 'Alison Moyer', 
                        'Jason Bateman', 
                        'Chris Packman'
                        ],
        season:       'S02', 
        episode:      'E05', 
        elapsedTime:  new Date(2018, 0, 0, 1, 30, 30 )
    }
)

console.log(presto instanceof HillHouseTitle);  // true
console.log(presto.getName());                  // Presto
console.log(presto.name);                       // undefined
console.log(presto.getNameFromHere())           // undefined
console.log(presto instanceof CineTitle);       // true
console.log(presto.getTitle());                 // 'Haunting of Hill House'
presto.setEpisode('E10');                       //
console.log(presto.getEpisode());               // E10
