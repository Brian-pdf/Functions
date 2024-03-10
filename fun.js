function firstLetterName(name) {
    var firstLetter = name [0];
    alert("The name" + name + " starts with the letter " + firstLetter);
}

function divisibleByTwo(number) {
    if (number % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function LargestNum(arr) {
    var largest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

firstLetterName("Alice");
var isEven = divisibleByTwo(10);
console.log("Is 10 divisible by 2? " + isEven);
var numbers = [5, 10, 20, 15];
var maxNumber = largestNum(numbers);
console.log("The largest number in the array is: " + maxNumber);