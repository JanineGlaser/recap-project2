// phew… not a lot going on here. Please add some code!
console.clear;

/*Bookmar-Button*/
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark--active");
});

/*Answer-Button*/
const answerButton = document.querySelector('[data-js="answer-button"]');
const showAnswer = document.querySelector('[data-js="show-answer"]');

answerButton.addEventListener("click", () => {
  showAnswer.classList.toggle("card__answer--active");
  if (showAnswer.classList.contains("card__answer--active")) {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
});
