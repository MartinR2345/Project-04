// This is where I'm picking out all the elements with ids on them
// Create a variable name "computerChoiceDisplay" and grab the id name of my <span> tag ("computer-choice") from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
const computerChoiceDisplay = document.getElementById('computer-choice');

// Create a variable name "userChoiceDisplay" and grab the id name of my <span> tag ("user-choice") from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
const userChoiceDisplay = document.getElementById('user-choice');

// Create a variable name "resultDisplay" and grab the id name of my <span> tag ("result") from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
const resultDisplay = document.getElementById('result');

// Let's get all the possible choices by creating a variable, give it a name called "possibleChoices"
// Assigned to this variable (possibleChoices) is the document.querySelectorAll method.  This method finds a list of elements that match the CSS selector that I specified.  I use this because I want everything in my HTML that is a button element.  Since I'm only using three buttons, it appropriate to use this otherwise if I were to have more than three buttons, I could give my buttons a className for each one.
const possibleChoices = document.querySelectorAll('button');

// Create a global variable named "userChoice". This will allow me to access this variable wherever and use it in my JS file. I didn't assigned a value to this variable.
let userChoice;

// I'm going to grab my "possibleChoices" variable and use the forEach() method.
// This forEach() method will pass a function and take a parameter named "possibleChoice". When I call the forEach() method, this function will be executed for each button.
// I use the "addEventListener" to listen up for a click so if a user clicks on any of the buttons, something will happen. What I want to happen is, I want to pass through the event(e) and then I want to actually get the target id so whenever I click or a user clicks, I'd get the id and save it to my global variable named "userChoice"
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    // Get the userChoiceDisplay and assign the innerHTML so it returns the HTML content(inner HTML) of an element.
    userChoiceDisplay.innerHTML = userChoice
    //Run this "generateComputerChoice()" function
    generateComputerChoice()
    //Run this "getResult()" function
    getResult()

}))

// Create a function named "generateComputerChoice()"
function generateComputerChoice() {
    // Use the math.floor to round it to the nearest whole integer/full integer and the math.random to generates a number between 0 and 1, that isn't 1 or 0
    const randomNumber = Math.floor(Math.random() * 3) + 1

    // I use the console.log(randomNumber) to check the code I wrote

    // I used an if statement to create a condition to check if randomNumber is equal to 1(then computerChoice is equal to "rock") or 2(then computerChoice is equal to "paper") or 3(then computerChoice is equal to "scissors")
    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'paper'
    }
    if (randomNumber === 3){
        computerChoice = 'scissors'
    }

// Get the computerChoiceDisplay HTML content by using innerHTML property
computerChoiceDisplay.innerHTML = computerChoice
}

//Create a function named getResult() 
function getResult() {
    //Create an if statement to create a condition that executes either a boolean value (true or false) between "computerChoice" & "userChoice" when a button is clicked
    if (computerChoice === userChoice)  {
            result = 'Its a draw!'
        }
    if (computerChoice === 'rock' && userChoice === "paper") {
            result = 'You win!'
        }
    if (computerChoice === 'rock' && userChoice === "scissors") {
            result = 'You lost!'
        }
    if (computerChoice === 'paper' && userChoice === "scissors") {
            result = 'You win!'
        }
    if (computerChoice === 'paper' && userChoice === "rock") {
            result = 'You lose!'
        }
    if (computerChoice === 'scissors' && userChoice === "rock") {
            result = 'You win!'
        }
    if (computerChoice === 'scissors' && userChoice === "paper") {
            result = 'You lose!'
        }
    
    // Get the resultDisplay HTML content by using innerHTML property
    resultDisplay.innerHTML = result;

}

