
// taken from comments from:
// https://dev.to/somedood/emulating-private-variables-in-javascript-with-closures-and-factory-functions-2314
// comment by ironydelerium
// (https://dev.to/ironydelerium)

let CineTitle = (function() {
    const Private = new WeakMap();
    return class CineTitle {
        constructor(title, isFilm) {
            // Yes, we're only storing one value in the "private object".
            // Of course, the example is a bit contrived.
            Private.set(this, { title });
            Private.set(this, { isFilm });
        }
    
        get Title() {
            return Private.get(this).title;
        }
        set Title(title) {
            Private.get(this).title = title;
        }

        // For comparison to the original. I'd use 'get name()' and 
        // 'set name(name)' instead, personally, but that I think is more
        // a matter of personal preference.
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // getName() { return Private.get(this).name; }
        // setName(name) { Private.get(this).name = name; }
    }
})();

let Animal = (function(CineTitle) {
  const Private = new WeakMap();
  return class CineTitleExtension extends CineTitle {
    constructor(name, job) {
      super(name);
      Private.set(this, { job });
    }
    getJob() { return Private.get(this).job; }
    setJob(job) { Private.get(this).job = job; }

    // Just for exposition: this should always return undefined,
    // since NamedThing has it's own WeakMap, separate from this one
    getNameFromHere() { return Private.get(this).name; }
  }
})(CineTitle);

const presto = new Animal('Presto', 'Digger');
console.log(presto instanceof CineTitle); // true
console.log(presto.getName());             // Presto
console.log(presto.name);                  // undefined
console.log(presto.getNameFromHere())      // undefined
console.log(presto instanceof Animal);     // true
console.log(presto.getJob());              // Digger
presto.setJob('Bone Finder');
console.log(presto.getJob());              // Bone Finder