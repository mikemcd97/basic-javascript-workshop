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
    
    switch(operation){
        
        case "add":
            
            return (num1+num2);
            
            
        case "mult":
            
            return (num1*num2);
            
        
        case "sub":
        
            return (num1-num2);
            
            
        case "div":
        
            return (num1/num2);
            
    }
}

function repeatString(inputString, numRepetitions) {
    if(numRepetitions < 0){
        return "";
    }
    else{
        return Array(numRepetitions + 1).join(inputString);
    }
}

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

function longestWord(inputString) {
    var wordArray = inputString.split(' ');
    var wordLength = 0;
    var word;
    for (var i = 0; i < wordArray.length; i++){
    if(wordLength < wordArray[i].length){
        wordLength = wordArray[i].length;
        word = wordArray[i];
    }
   
    }
   
    if(inputString === ""){
    return "";
    
        
    }
    else {
        return word;
        
    }
}

function capitalize(inputString) {
  var lowInputString = inputString.toLowerCase();
  var arr = lowInputString.split(" ");
  var newArr = [];
  for (var i = 0; i < arr.length; i++){
     newArr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
  }
  return newArr.join(' ');
  
}

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0;
   
    for(var i = 0; i<arrayOfNumbers.length; i++){
        sum = arrayOfNumbers[i] +sum;
        
    }
    if(typeof sum === 'number'){
        return sum;
    }
    else{
        return;
    }
}
function uniqueElements(array1, array2) {
    var uArr = [];
       
}
function isPalindrome(inputString) {
    var pal = inputString.split('').reverse().join('').toLowerCase();
    var pal1 = pal.replace(/[^0-9a-z]/gi, '');
    var pal2 = inputString.replace(/[^0-9a-z]/gi, '').toLowerCase();
    if(pal2 === pal1){
        return true;
    }
    else{
        return false;
    }
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