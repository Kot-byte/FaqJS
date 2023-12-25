const btns=document.querySelectorAll('.faq_question-answer-show');

const changeArrow =(icon)=>{
    if (icon.classList.contains('fa-agle-down')){
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
    }
    else{
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
    }
}
const toggleAnswer=(answer) =>{
    if(answer.classList.contains('visible')){
        answer.classList.remove('visible');
    } else {
        answer.classList.add('visible');
    }
    }
const actioveQuestion = (question) =>{
    if (question.classList.contains('active')){
        question.classList.remove('active');
    } else{
        question.classList.add('active');

    }
    }

    btns.forEach(btn=> {
        btn.addEventListener('click', (e) =>{
            e.preventDefault();
            const icon =btn.children[0];
            changeArrow(icon);
            const answer=btn.nextElementSibling;
            toggleAnswer(answer);
            const question=btn.previousElementSibling;
            actioveQuestion(question);
        })
    })
