document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        const headerHeight = home.clientHeight - 150;
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

        document.querySelectorAll('section').forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionOffset = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));

                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });

    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector('nav a[href="#about"]').classList.add('active');
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
