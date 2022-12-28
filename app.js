const btns = document.querySelectorAll(".question-btn");
let questions = [];
btns.forEach(function (btn) {
  questions.push(btn.parentElement.parentElement);
});
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
