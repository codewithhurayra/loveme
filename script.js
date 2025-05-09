const container = document.querySelector('.container');
const question = document.querySelector('.question');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');

// secend code is starting here
const cont = container.getBoundingClientRect();
const nobtnR = no_btn.getBoundingClientRect();

yes_btn.addEventListener('click', () => {
    question.innerHTML = 'I love you too :)';
});

no_btn.addEventListener('mouseover', () => {
    const maxLeft = container.clientWidth - no_btn.offsetWidth;
    const maxTop = container.clientHeight - no_btn.offsetHeight;

    const randomLeft = Math.floor(Math.random() * maxLeft);
    const randomTop = Math.floor(Math.random() * maxTop);

    no_btn.style.left = randomLeft + 'px';
    no_btn.style.top = randomTop + 'px';
});
