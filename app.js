let buttons = document.querySelectorAll(".icon");
let answers = document.querySelectorAll(".answer");
let questionOneAnswer = document.querySelector("#questionOneAnswer");
let questionTwoAnswer = document.querySelector("#questionTwoAnswer");
let questionThreeAnswer = document.querySelector("#questionThreeAnswer");
let questionOneSpan = document.querySelector("#questionOneSpan");
let questionTwoSpan = document.querySelector("#questionTwoSpan");
let questionThreeSpan = document.querySelector("#questionThreeSpan");

let spans = [questionOneSpan, questionTwoSpan, questionThreeSpan];

buttons.forEach((button) => {
  button.addEventListener("click", (element) => {
    if (element.target.id === "questionOneButton") {
      questionOneAnswer.classList.toggle("displayNone");
      questionOneSpan.classList.toggle("opacityZero");

      answers.forEach((answer) => {
        if (answer.id != "questionOneAnswer") {
          answer.classList.add("displayNone");
        }

        spans.forEach((span) => {
          if (span.id != "questionOneSpan") {
            span.classList.remove("opacityZero");
          }
        });
      });
    } else if (element.target.id === "questionTwoButton") {
      questionTwoAnswer.classList.toggle("displayNone");
      questionTwoSpan.classList.toggle("opacityZero");

      answers.forEach((answer) => {
        if (answer.id != "questionTwoAnswer") {
          answer.classList.add("displayNone");
        }

        spans.forEach((span) => {
          if (span.id != "questionTwoSpan") {
            span.classList.remove("opacityZero");
          }
        });
      });
    } else if (element.target.id === "questionThreeButton") {
      questionThreeAnswer.classList.toggle("displayNone");
      questionThreeSpan.classList.toggle("opacityZero");

      answers.forEach((answer) => {
        if (answer.id != "questionThreeAnswer") {
          answer.classList.add("displayNone");
        }

        spans.forEach((span) => {
          if (span.id != "questionThreeSpan") {
            span.classList.remove("opacityZero");
          }
        });
      });
    }
  });
});
