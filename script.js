const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
];


//1- funzione che fa partire il test:
function startTest() {
  if (document.getElementById("trusty").checked) {              // ci assicuriamo che il test parta solo se la spunta è stata messa
    document.getElementById("main").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuest();
  };
}

//2- funzione che mostra domande-risposte:
let questionNumber = 0;    // numero domanda

function showQuest () {
  // timerStart();

  let questParent = document.getElementById("quiz");  //catturo il parent
  questParent.innerHTML = "";
    

    if (questionNumber < questions.length) {
      let question = document.createElement("h1");       // creo l'h1 per le domande
      question.innerText = questions[questionNumber].question;
      question.classList.add("quest-style");
      questParent.appendChild(question);                   // inserisco l'h1 per le domande     

      let correctAnswer = questions[questionNumber].correct_answer;                           // salvo solo le risposte corrette
      let allAnswers = [correctAnswer].concat(questions[questionNumber].incorrect_answers);  // unisce le risposte corrette a quelle errate in un array

      allAnswers = toRandomArray(allAnswers);              // risposte in ordine random

      for (let i = 0; i < allAnswers.length; i++) {           // creo elementi necessari a mostrare risposte
      let answerBtn = document.createElement("input");
      let answerLabel = document.createElement("label");
      let radioId = "radio" + i;

      answerBtn.setAttribute("type", "radio");  // input radio
      answerBtn.setAttribute("name", "option");
      answerBtn.setAttribute("value", allAnswers[i]);
      answerBtn.setAttribute("id", radioId);
      answerBtn.classList.add("radio-input");

      answerLabel.setAttribute("for", radioId);
      answerLabel.classList.add("label-input");
      answerLabel.innerText = allAnswers[i];

      questParent.appendChild(answerBtn);
      questParent.appendChild(answerLabel);

      answerBtn.addEventListener("click", checkAnswer);       // richiamo funzione per check risposta corretta e incremento punteggio
      };

  } else {showResult()};
}

let nextQuest = document.getElementById("nextQuestion");          // bottone prossima domanda

//3- funzione controllo risposte 
let score = 0;  // variabile punteggio

function checkAnswer(event) {
    let selectedAnsw = event.target.value;

    if (questions[questionNumber].correct_answer.includes(selectedAnsw)) {
        score++;
    }
    questionNumber++;
    
    let nextQuest = document.getElementById("nextQuestion");
    nextQuest.style.display = "block";
}


//4- funzione prossima domanda
function nextQuestion () {
    nextQuest.style.display = "none";
    showQuest();
    // timerStart ();
}

//5- funzione ordine risposte random
function toRandomArray(array) {
    let mixedArray = [];
    while (array.length > 0) {
      let randomIndex = Math.floor(Math.random() * array.length);
      let randomElement = array.splice(randomIndex, 1)[0];
      mixedArray.push(randomElement);
    }
    return mixedArray;
}


//6- TIMER:
// let time = 60; 
// let timer; 

// function timerStart () {
//   clearInterval(timer);
//   timer = setInterval( () => {
//     document.getElementById("timer").textContent = "seconds " + time + " remaining";
//     time--;
    
//     if (time <= 0) {
//       clearInterval(timer); 
//       questionNumber++;
//       nextQuestion();
//     }
//   }, 1000);
// }

//7- funzione che mostra il risultato del test:
function showResult() {
    document.getElementById("quiz").style.display = "none";  //nascondo il div con il quiz
    // clearInterval(timer);                                    // fermo il timer!
    // time = 0;                                                 
    // document.getElementById("timer").style.display = "none"; //nascondo il timer
  
    // Mostra il punteggio finale 
      let result = document.createElement("h2");
      result.innerText = "This is your finale score: " + score;
      result.classList.add("newH2");
      document.body.appendChild(result);

}