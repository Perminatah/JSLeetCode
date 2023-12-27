



s = "MCMXCIV"
var romanToInt = function(s) {
    // dictonary to define the numerals
    let RomanDict = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }
    // initiate variables to store results
    let integer = []
    let posstore = 0
    let negstore = 0
    // split the array into letters to be translated
    sSplit = Array.from(s)
    // initial for loop which then iterates through split array to translate results
    for (a=0;a<s.length;a++){
        let romanstore = sSplit[a];
        if (RomanDict.hasOwnProperty(romanstore)){
            // push results into integer so that they are seperate list items
            integer.push(RomanDict[romanstore])
        }
    }
    // a for loop which checks whether the first item is larger than the second, if it is larger it is minuesed otherwise it is added
    for (b=0;b<=integer.length; b++){
        if (integer[b]<integer[b+1]){
            // negstore holds the negative results
            negstore = negstore-integer[b]
        }
        if (integer[b]>=integer[b+1]){
            // posstore holds all positive results
            posstore = posstore+integer[b]
        }

    }
// final then adds positive, negative and the final object in the array to produce a result
   final = posstore+negstore+integer[integer.length-1]
    return final;
}
console.log(romanToInt(s))