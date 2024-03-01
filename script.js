// const icon1 = document.getElementById("q1");
// const ansDiv = document.getElementsByClassName("answer-div");

// icon1.addEventListener("click", function(){
//     ansDiv.classList.toggle("hide");
//     console.log("clickedddd");
// })

const icon = document.querySelectorAll(".faq-icon");const answerContainer = document.querySelectorAll(".question-answer");
// icon.addEventListener('click', () =>{//     answerContainer.classList.remove("hide");//     console.log("clicked on arrow");// })
document.querySelectorAll('.faq-icon').forEach((item, index) => {    item.addEventListener('click', event => {
        answerContainer[index].classList.toggle("hide");
    });});