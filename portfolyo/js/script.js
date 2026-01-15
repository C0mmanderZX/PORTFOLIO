const text = 'Разрабатываю сайты для малого и среднего бизнеса.<br /> У меня можно заказать дизайн и верстку небольшого <br /> сайта или интернет-магазина';

let line = 0;
let count = 0;
let result = '';
function typeLine() {
    let interval = setTimeout(
        () => {
            result += text[line][count]
            document.querySelector('p').innerHTML = result + '|';


            count++;
            if (count >= text[line].length) {
                count = 0;
                line++;
                if (line == text.length) {
                    clearTimeout(interval);
                    document.querySelector('p').innerHTML = result;
                    return true;
                }
            }
            typeLine();
        }, getRandomInt(getRandomInt(50 * 2.5)))
}
typeLine();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* ScrollTo*/
document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/*** -=- GLightbox -=- ***/
let lightboxVideo = GLightbox({
    selector: '.glightboxvideo'
});


/***  -=-  menu  -=- ***/
let burgerButton = document.querySelector(".mobile_button");
let burgerMenu = document.querySelector(".mobile_menu");

burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});