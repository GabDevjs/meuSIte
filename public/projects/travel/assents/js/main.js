//navbar
let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.add('active');

    if (window.scrollY > 0) {
        document.querySelector('.navbar').classList.remove('active');
    } else {
        document.querySelector('.navbar').classList.remove('active');
    }
}

//video 
document.querySelectorAll('.about .video-container .controls .control-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
});

