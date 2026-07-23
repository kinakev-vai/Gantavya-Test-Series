import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

document.getElementById("saveBtn").addEventListener("click", async () => {

  const question = document.getElementById("question").value;
  const option1 = document.getElementById("option1").value;
  const option2 = document.getElementById("option2").value;
  const option3 = document.getElementById("option3").value;
  const option4 = document.getElementById("option4").value;
  const answer = document.getElementById("answer").value;
  const subject = document.getElementById("subject").value;

  await addDoc(collection(db, "questions"), {
    question,
    option1,
    option2,
    option3,
    option4,
    answer,
    subject
  });

  alert("Question Saved Successfully!");

});
