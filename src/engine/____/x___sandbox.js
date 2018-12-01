//
// CineTitle.js
//

//
//  CineTitle
//  ~~~~~~~~~

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

//
//  HillHouseTitle
//  ~~~~~~~~~~~~~~
 
let HillHouseTitle = (function(CineTitle) {
    const Private = new WeakMap();
    return class CineTitleExtension extends CineTitle {
      constructor(season, episode, elapsedTime) {
        super(name);
        Private.set(this, { job });
      }
      getJob() { return Private.get(this).job; }
      setJob(job) { Private.get(this).job = job; }
  
      // Just for exposition: this should always return undefined,
      // since NamedThing has it's own WeakMap, separate from this one
      getNameFromHere() { return Private.get(this).name; }
    }
  })(HillHouseTitle);  // })(CineTitle);
  
  const presto = new HillHouseTitle('Presto', 'Digger');
  console.log(presto instanceof CineTitle); // true
  console.log(presto.getName());             // Presto
  console.log(presto.name);                  // undefined
  console.log(presto.getNameFromHere())      // undefined
  console.log(presto instanceof Animal);     // true
  console.log(presto.getJob());              // Digger
  presto.setJob('Bone Finder');
  console.log(presto.getJob());              // Bone Finder



  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  
const presto = new HillHouseTitle('Presto', 'Digger');
console.log(presto instanceof CineTitle); // true
console.log(presto.getName());             // Presto
console.log(presto.name);                  // undefined
console.log(presto.getNameFromHere())      // undefined
console.log(presto instanceof Animal);     // true
console.log(presto.getJob());              // Digger
presto.setJob('Bone Finder');
console.log(presto.getJob());              // Bone Finder