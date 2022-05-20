let arrayNumbers = ["zero", "one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

let arrayNames = ["Sam", "Aline", "Benji"];

let arrayActions = ["stink", "eat", "poop", "play", "hide", "sniff","run"];

function findRandomWord(listOfWords) {

    let random = [Math.floor(Math.random()*listOfWords.length)];

    return listOfWords[random]
}


console.log(findRandomWord(arrayNumbers));
console.log(findRandomWord(arrayNames));
console.log(findRandomWord(arrayActions));