function firstLetter(inputString) {
    if(inputString === undefined){
        return undefined;
    }
    else{
        return inputString[0];
    }
}

function lastLetter(inputString) {
     if(inputString === undefined){
        return undefined;
    }
    else{
        var ans = (inputString.length - 1);
        return inputString[ans];
    }
}

function letterAtPosition(inputString, position) {
    if(inputString===undefined){
        return;
    }
    else{
        return inputString[position];
    }
}

function addTwoNumbers(num1, num2) {
    var ans = (num1 + num2);
    if(typeof ans === 'number'){
        return ans;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return(num1 * num2);
    }
    else{
        return undefined;
    }
}
function calculator(operation, num1, num2) {

}

function repeatString(inputString, numRepetitions) {

}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};