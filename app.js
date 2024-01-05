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

            if (scrollPosition > homeSectionOffset + (headerHeight / 4)) {
                header.style.opacity = 0;
            }
        } else {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
            header.style.opacity = Math.min(1, (scrollPosition - (homeSectionOffset + headerHeight)) / (headerHeight/7));
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


const projectDetails = {
    'PortEZ': 'Project description for PortEZ.',
    'FitHappens': 'Project description for FitHappens.',
    'PersonalWebsite': 'Project description for Personal Website.',
    'LSUTutoringApp': 'Project description for LSU Tutoring App.'
};

const projectTech = {
    'PortEZ': 'Project technologies.',
    'FitHappens': 'Project technologies.',
    'PersonalWebsite': 'Project technologies.',
    'LSUTutoringApp': 'Project technologies.'
};

//this function shows the project details when a project image is clicked
function showDetails(projectTitle) {
    // Get the detail container and title elements
    var detailContainer = document.getElementById('detailContainer');
    var detailTitle = document.getElementById('detailTitle');
    var projectDescription = document.getElementById('projectDescription');
    var projectTechnologies = document.getElementById('projectTechnologies');
    var overlay = document.getElementById('overlay');

    // Set the title and display the container
    detailTitle.textContent = projectTitle;
    projectDescription.textContent = projectDetails[projectTitle];
    projectTechnologies.textContent = projectTech[projectTitle];
    detailContainer.classList.add('active');
    overlay.style.display = 'block';
}

// close the additional details function
function closeDetails() {
    // Logic to close the detail container
    document.getElementById('detailContainer').classList.remove('active');
    // Hide the overlay
    document.getElementById('overlay').style.display = 'none';
}

// Click event listener for the gray overlay
document.body.addEventListener('click', function (event) {
    const detailContainer = document.getElementById('detailContainer');


    // Check if the clicked element is the gray overlay
    if (event.target.classList.contains('overlay') && detailContainer.classList.contains('active')) {
        // Close the detail container and remove the overlay
        closeDetails();
    }
});