const init = () => {
    const question = document.getElementsByClassName('question');
    const answer = document.getElementsByClassName('answer');
    const icon = document.getElementsByClassName('icon');

    question[0].addEventListener('click', () => {
        question[0].classList.toggle('font')
        answer[0].classList.toggle('on')
        icon[0].classList.toggle('fa-angle-up')
    });

    question[1].addEventListener('click', () => {
        question[1].classList.toggle('font')
        answer[1].classList.toggle('on')
        icon[1].classList.toggle('fa-angle-up')
    });

    question[2].addEventListener('click', () => {
        question[2].classList.toggle('font')
        answer[2].classList.toggle('on')
        icon[2].classList.toggle('fa-angle-up')
    });

    question[3].addEventListener('click', () => {
        question[3].classList.toggle('font')
        answer[3].classList.toggle('on')
        icon[3].classList.toggle('fa-angle-up')
    });

    question[4].addEventListener('click', () => {
        question[4].classList.toggle('font')
        answer[4].classList.toggle('on')
        icon[4].classList.toggle('fa-angle-up')
    });
}

window.onload = init;