document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {

        const scrollPosition = window.scrollY;
        const headerHeight = home.clientHeight-105;
        const homeSectionOffset = document.getElementById('home').offsetTop;
        const opacity = Math.min(1, Math.max(0, (scrollPosition - homeSectionOffset) / (headerHeight / 5)));


        if (scrollPosition < homeSectionOffset + headerHeight) {
            header.style.backgroundColor = `rgba(51, 51, 51, ${opacity})`;
            header.style.opacity = 1 - opacity;

            if (scrollPosition > homeSectionOffset + (headerHeight / 5)) {
                header.style.opacity = 0;
            }
        } else {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
            header.style.opacity = Math.min(1, (scrollPosition - (homeSectionOffset + headerHeight)) / (headerHeight / 5));
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
    header.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
    
}

function hoverArrow(isHovered) {
    const arrowImg = document.getElementById('arrow-img');
    if (isHovered) {
        arrowImg.src = 'images/downhover.png'; 
    } else {
        arrowImg.src = 'images/downarrow.png'; 
    }
}