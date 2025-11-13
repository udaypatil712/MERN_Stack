let questionsArrObj = [
  {
    title:
      "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
    options: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
    ],
    correctOption: 2,
  },
  {
    title:
      "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
    options: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
    ],
    correctOption: 2,
  },
  {
    title:
      "3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
    options: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
    ],
    correctOption: 2,
  },
  {
    title:
      "4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
    options: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
    ],
    correctOption: 2,
  },
  {
    title:
      "5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis",
    options: [
      "Lorem ipsum dolor sit amet.",
      "Lorem ipsum dolor sit.",
      "Lorem, ipsum dolor.",
      "Lorem ipsum dolor sit amet.",
    ],
    correctOption: 2,
  },
];





let score=0;
let rightAns = 2;
let wrongAns = 1;
let currQuesInd = 0;

let questiontitle = document.querySelector("p");

let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");

let nextbtn = document.querySelector(".next");

let showScore = document.querySelector(".displayScore");



nextbtn.addEventListener("click" ,nextQuestion);

function nextQuestion(){

    if(questionsArrObj.length-1 === currQuesInd){
         showScore.textContent = "This is You are Score :-" + score;
    }

    currQuesInd++;
    
    let questionObj = questionsArrObj[currQuesInd];

    questiontitle.textContent = questionObj.title;

    option1.textContent = questionObj.options[0];
    option2.textContent = questionObj.options[1];
    option3.textContent = questionObj.options[2];
    option4.textContent = questionObj.options[3];
   
    

}


function changeScore(correctAns){
    if(questionsArrObj[currQuesInd].correctOption === correctAns){
        score+=rightAns;
    }else{
        score-=wrongAns;
    }
}

option1.addEventListener("click" , ()=>{
     changeScore(1);
     nextQuestion();
});
option2.addEventListener("click" , ()=>{
     changeScore(2);
     nextQuestion();
});
option3.addEventListener("click" , ()=>{
     changeScore(3);
     nextQuestion();
});
option4.addEventListener("click" , ()=>{
     changeScore(4);
     nextQuestion();
});

