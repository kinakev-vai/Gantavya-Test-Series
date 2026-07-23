import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const nextBtn = document.getElementById("nextBtn");

let questions = [];
let currentQuestion = 0;
let score = 0;
async function loadQuestions() {
    const querySnapshot = await getDocs(collection(db, "questions"));

    querySnapshot.forEach((doc) => {
        questions.push(doc.data());
    });

    showQuestion();
}

function showQuestion() {

    let q = questions[currentQuestion];

    question.innerText = q.question;
    option1.innerText = q.option1;
    option2.innerText = q.option2;
    option3.innerText = q.option3;
    option4.innerText = q.option4;

    if(currentQuestion === questions.length - 1){
        nextBtn.innerText = "Submit";
    }else{
        nextBtn.innerText = "Next";
    }
}

nextBtn.addEventListener("click", () => {

    if(currentQuestion < questions.length - 1){
        currentQuestion++;
        showQuestion();
    }else{
        alert("Test Completed!");
    }

});

loadQuestions();
