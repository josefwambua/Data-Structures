// A valid Anagram 
// An anagram is a word or phrase formed by rearranging letters
// of a different word or phrase, using all the original letters exactly once

// Input: (s = "anagram"), (t = "nagaram"); ---> output: true;
// Input: (s - "rat"), (t  - "car");       ---> output: false;

const isAnagram = function (s,t) {
    // checking the lengths of the objects, should be of sane size

    if(s.length !== t.length) return false;
     // initializing empty objects
     let obj1 = {}
     let obj2 = {}

     for (let i = 0; i<s.length; i++){
        // comparing the two objects arrays
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
     }
     for (const key in obj1){
      //checking if the keys are the same if not terminate it
      if(obj1[key] !==  obj2[key]) return false;
     }
    return true;

}
console.log(isAnagram("plot","tar"));