/*
binarySearch1
*/

// return -1 if not found
// Iterative solution
function binarySearch2(myArray, key) {
    let lowerPointer = 0;
    let upperPointer = myArray.length - 1;
    while (lowerPointer <= upperPointer) {
        // get the midpoint of the array,
        // check if midpoint is equal to the key, if so, return the midpoint index
        let midpoint = Math.floor(
            lowerPointer + (upperPointer - lowerPointer) / 2,
        );
        if (myArray[midpoint] === key) return midpoint;

        // check if key is less than midpoint value
        // take the array less than midpoint
        if (key < myArray[midpoint]) {
            upperPointer = midpoint - 1;
        }

        // check if key is greater than midpoint value
        // take the array greater than midpoint
        if (key > myArray[midpoint]) {
            lowerPointer = midpoint + 1;
        }
    }
    return -1;
}
function binaryRecursion(myArr, key, low, high) {
    if (low > high) return -1;
    let midpoint = Math.floor(low + (high - low) / 2);
    if (myArr[midpoint] === key) {
        return midpoint;
    } else if (key < myArr[midpoint]) {
        return binaryRecursion(myArr, key, low, midpoint - 1);
    } else {
        return binaryRecursion(myArr, key, midpoint + 1, high);
    }
}
// recurssion caller
function binarySearch1(myArray, key) {
    return binaryRecursion(myArray, key, 0, myArray.length - 1);
}
module.exports = binarySearch1;
