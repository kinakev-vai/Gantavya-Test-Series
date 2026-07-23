const score = Number(localStorage.getItem("score"));
const total = Number(localStorage.getItem("total"));

document.getElementById("score").innerText =
"Score : " + score + " / " + total;

const percentage = (score / total) * 100;

document.getElementById("percentage").innerText =
"Percentage : " + percentage.toFixed(2) + "%";

if (percentage >= 40) {
    document.getElementById("status").innerText = "✅ PASS";
} else {
    document.getElementById("status").innerText = "❌ FAIL";
}
