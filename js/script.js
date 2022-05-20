let arrayNumbers = ["zero", "one", "two", "three", "four", "five","six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

let arrayNames = ["Sam", "Aline", "Benji"];

let arrayActions = ["stinks", "eats", "poops", "plays", "hides", "sniffs","runs"];


function findRandomWord(listOfWords) {

    let random = [Math.floor(Math.random()*listOfWords.length)];

    return listOfWords[random]
}

function generateFullPhrase() {

    return '${findRandomWord(arrayNumbers)} ${findRandomWord(arrayNames)} ${findRandomWord(arrayActions)}';
}

function displayFullPhrase() {
    let phrase = generateFullPhrase(); 
    
    let pElement = document.querySelector(".phrase");

    pElement.innerText = phrase;
}

displayFullPhrase();
