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

async function loadQuestion() {
  try {

    const querySnapshot = await getDocs(collection(db, "questions"));

    querySnapshot.forEach((doc) => {

      const data = doc.data();

      question.innerText = data.question;
      option1.innerText = data.option1;
      option2.innerText = data.option2;
      option3.innerText = data.option3;
      option4.innerText = data.option4;

    });

  } catch (error) {
    console.error(error);
    alert("Question loading failed!");
  }
}

loadQuestion();
