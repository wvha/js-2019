

var uniqueOccurrences = function(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1
        } else obj[arr[i]]++
    }
    console.log('obj', obj)

    let second = {}
    Object.keys(obj).map(key => {
      console.log('current', second[obj[key]])
        if (!second[obj[key]]) {
            second[obj[key]] = 1
        } else if (second[obj[key]]) {
          return false
        }
    })
    console.log('second', second)
    return true
};

console.log(uniqueOccurrences([1, 2]))



// USING A SET AND STUFF


var uniqueOccurrences = function (arr) {
    // Let's make a map to keep track of how many times each number occurs in our array
    let myMap = new Map()

    //For every number in our array using the for-of loop
    for (let num of arr) {
        //If we have the key already, we know the value is a number, so increment it by one
        if (myMap.has(num)) {
            myMap.set(num, (myMap.get(num) + 1))
        } else {
            //If we dont have the key in our map...
            myMap.set(num, 1)
        }
    }
    //Make a new set and add the value of each key. If at any point we already saw the value we know the occurrences are NOT unique
    let mySet = new Set()
    //Grab the key and value of each myMap entry
    for (const val of myMap.values()) {
        //If the set already has it, return false
        if (mySet.has(val)) return false
        //Otherwise add it
        mySet.add(val)
    }
    //If we got though the code above, return true, since the occurrences are all unique
    return true
};