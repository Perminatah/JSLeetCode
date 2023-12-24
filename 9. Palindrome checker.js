// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
var isPalindrome = function(x) {
    // convert number to string 
    stringnum = x.toString();
        // check if even or uneven number
    if (stringnum.length%2>0){evenodd = false}
    else {evenodd = true};
    if (evenodd == true){
        // creates a variable which is half the length of the even stringnum
        half = stringnum.length/2
        // creates a varaible of characters fromt he first half
        snip = stringnum.substring(0,half)
        // create a variable which splits each individual character, reverses each character and then joins them back together in a string
        revsnip = snip.split("").reverse().join("")
        // checks for equality and then confirms true or false
        if ((revsnip===(stringnum.substring(half,stringnum.length)))) {return true}
        else return false;
    }
    if (evenodd == false){
        // half = middle number in the string
        half = (((stringnum.length-1)/2)+1)
        // first half is digits up until halfway
        frsthalf = stringnum.substring(0,half-1)
        // second half is digits from half way number onwards
        scndhalf = stringnum.substring(half,stringnum.length)
        // revfrsthalf is the first digits reversed
        revfrsthalf = frsthalf.split("").reverse().join("")
        // then check for equality and confirm whether it is true or not
        if ((revfrsthalf===(scndhalf))) {return true}
        else return false;

    }
};

x = 12221
console.log(isPalindrome(x))