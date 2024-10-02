
const statement = document.getElementById("statement");
const optionButtons = document.querySelector("#options").children;
const nextQuestionButton = document.getElementById("next-question-button");
const explanation = document.getElementById("explanation");
const guessedQuestions = document.querySelector(".guessed-questions");
const allQuestions = document.querySelector(".all-questions");

let rightGuesses = 0;
let allGuesses = 0;

function disable(button) {
    button.disabled = true;
}

function enable(button) {
    button.disabled = false;
}

disable(nextQuestionButton);


let guess;
let questionNumber = 1;

const facts = [
    {
        statement: "There are three domains of life: Archaea, Bacteria and Eukarya.",
        answer: true,
        explanation: "The three-domain system was introduced by Carl Woese, Otto Kandler and Mark Wheelis in 1990."
    },
    {
        statement: "Do bacteria have a nucleus?",
        answer: false,
        explanation: "Only eukaryotes have a nucleus, whereas bacteria have a nucleoid."
    },
    {
        statement: "Viruses are subtype of bacteria.",
        answer: false,
        explanation: "Bacteria are free-living cells that can live inside or outside a body, while viruses are a non-living collection of molecules that need a host to survive."
    },
    {
        statement: "Researchers can engineer living bacteria to store data in their DNA.",
        answer: true,
        explanation: "DNA can store the equivalent of about 10 digital movies of data in the volume of a single grain of salt."
    },
    {
        statement: "The number of bacteria in your mouth is more than the total number of humans on Earth.",
        answer: false,
        explanation: "There are about 6 billion bacteria in a human's mouth, but there are 8.2 billion people on Earth."
    }
]


let fact = facts[questionNumber - 1];

statement.textContent = fact.statement;

function isCorrect(guessString) {
    return guessString === fact.answer.toString();
}

for (let button of optionButtons) {
    button.addEventListener("click", () => {
        
        explanation.textContent = fact.explanation;
        explanation.classList.add("text-decoration");
        for (let otherButton of optionButtons) {
        disable(otherButton);}
                
      if (isCorrect(button.value)) {
            button.classList.add("correct");
            
            rightGuesses +=1;
            guessedQuestions.innerText = rightGuesses;
            allGuesses +=1;
            allQuestions.innerText = allGuesses;
            console.log("1");
       } else {
            button.classList.add("incorrect");
            allGuesses +=1;
            allQuestions.innerText = allGuesses;
        };

        enable(nextQuestionButton);
        
        if (questionNumber === facts.length) {
            nextQuestionButton.disabled = true;
            nextQuestionButton.innerText = "No more questions!";  
        }

    })

}



nextQuestionButton.addEventListener("click", () => {

    fact = facts[questionNumber];

    statement.textContent = fact?.statement;

    for (let otherButton of optionButtons) {
        enable(otherButton);
        otherButton.classList.remove("incorrect");
        otherButton.classList.remove("correct");
     } 
          
     explanation.textContent = "";
     explanation.classList.remove("text-decoration");
    
    questionNumber +=1;



})


