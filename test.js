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

    const querySnapshot = await getDocs(collection(db, "questions"));

    querySnapshot.forEach((doc) => {

        const data = doc.data();

        question.innerHTML = data.question;

        option1.innerHTML = data.option1;
        option2.innerHTML = data.option2;
        option3.innerHTML = data.option3;
        option4.innerHTML = data.option4;

    });

}

loadQuestion();
