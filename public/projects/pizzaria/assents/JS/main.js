let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("nav-toggle");
});

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("nav-toggle");
};

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '500');
});

const sr = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    reset: true
});
ScrollReveal().reveal('.col-left, .content-col, .img-col', { origin: 'left' });
ScrollReveal().reveal('.col-right, .content-col-image, .getapp-content', { origin: 'right' });
ScrollReveal().reveal('.item, .footer-about, .footer-col', { interval: 100 });

function loader(){
    document.querySelector('.loard-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}
window.onload = fadeOut;