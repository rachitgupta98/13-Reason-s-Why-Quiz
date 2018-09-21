const ques = [
  ["What is real name of Hannah", "Baker", "Kiley", "Nina", "Katherine", "D"],
  [
    "Which character dies in a car accident during season 1?",
    "Jon Ashton",
    "Bryce",
    "Jeff Atkins",
    "Ryan Shaver",
    "C"
  ],
  [
    "Which punctuation mark does Clay eventually get inked onto his wrist?",
    "Colon",
    "Semi Colon",
    "Comma",
    "None of Above",
    "B"
  ],
  [
    "What is Hannah Baker's dad called?",
    "Andrew",
    "Michael",
    "John",
    "Robert",
    "A"
  ],
  [
    "Which song does Hannah and Clay dance together?",
    "As We Lay Here",
    "It Was Always You",
    "The Night We Met",
    "Life Is No More",
    "C"
  ],
  [
    "What is the name of the drug dealer that Justin's mum is dating?",
    "Brad",
    "Seth",
    "Todd",
    "Matt",
    "B"
  ],
  [
    "Who does Montgomery de la Cruz fight at school before being stopped by Mr Porter?",
    "Alex Standall",
    "Clay Jensen",
    "Tyler Down",
    "Justin Martin",
    "A"
  ],
  [
    "What is the name of the Teacher who reads out Hannah's poem in class?",
    "Mrs Bradstein",
    "Mrs Bradford",
    "Mrs Bradley",
    "Mrs Bradicon",
    "C"
  ],
  [
    "Who approaches Hannah for Dollar Valentine date?",
    "Roy",
    "Clay",
    "Alex",
    "Marcus",
    "D"
  ]
];
const answer = ["D", "C", "B", "A"];
let pos = 0;
let score = 0;
let num = 1;
let renderQuestion = () => {
  if (pos >= ques.length) {
    let status = document.getElementById("footer");
    status.innerHTML =
      "You Got" + " " + score + " " + "Correct Out Of" + " " + ques.length;
    status.style.justifySelf = "center";
    if (score <= 4) {
      alert("need improvement");
    } else if (score == 5 || score == 6) {
      alert("You are Average");
    } else {
      alert("great");
    }
    let showAnswer = document.getElementById("showAnswer");
    showAnswer.innerHTML = "<button>Answers</button>";
    showAnswer.style.justifySelf = "center";
  }

  let questions = document.getElementById("question");
  question = num + "." + " " + ques[pos][0];
  let choiceA = (document.getElementById("Q1").innerHTML = ques[pos][1]);
  let choiceB = (document.getElementById("Q2").innerHTML = ques[pos][2]);
  let choiceC = (document.getElementById("Q3").innerHTML = ques[pos][3]);
  let choiceD = (document.getElementById("Q4").innerHTML = ques[pos][4]);
  questions.innerHTML = "<h2>" + question + "</h2>";
};

let checkAnswerD = () => {
  if (ques[pos][5] == answer[0]) {
    score++;
  }
  num++;
  pos++;
  renderQuestion();
};
let checkAnswerC = () => {
  if (
    ques[pos][5] == answer[1] ||
    ques[pos][5] == answer[4] ||
    ques[pos][5] == answer[7]
  ) {
    score++;
  }
  num++;
  pos++;
  renderQuestion();
};
let checkAnswerB = () => {
  if (ques[pos][5] == answer[2] || ques[pos][5] == answer[5]) {
    score++;
  }
  num++;
  pos++;
  renderQuestion();
};
let checkAnswerA = () => {
  if (ques[pos][5] == answer[3] || ques[pos][5] == answer[6]) {
    score++;
  }
  num++;
  pos++;
  renderQuestion();
};
let display = () => {
  alert(
    "A1. katherine A2. Jeff Atkins A3. Semi Colon A4. Andrew A5. The Night We Met A6. Seth A7. Alex Standall A8. Mrs Bradley A9. Marcus"
  );
};

window.addEventListener("load", renderQuestion);

document.getElementById("Q1").addEventListener("click", checkAnswerA);
document.getElementById("Q2").addEventListener("click", checkAnswerB);
document.getElementById("Q3").addEventListener("click", checkAnswerC);
document.getElementById("Q4").addEventListener("click", checkAnswerD);
document.getElementById("showAnswer").addEventListener("click", display);
