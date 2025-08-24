function getAnswer() {
  let question = document.getElementById("question").value.trim();
  let answerBox = document.getElementById("answerBox");

  if (question === "") {
    answerBox.innerHTML = "❌ Please type a question first.";
    return;
  }

  // Simple demo responses
  let answers = {
    "what is github": "GitHub is a platform for hosting and sharing code.",
    "what is html": "HTML is the standard markup language for creating web pages.",
    "what is css": "CSS is used to style HTML elements.",
    "what is javascript": "JavaScript is used to make web pages interactive."
  };

  let lowerQ = question.toLowerCase();
  answerBox.innerHTML = answers[lowerQ] || "🤔 Sorry, I don’t know the answer to that yet.";
}
