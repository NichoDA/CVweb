document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('nav a');

    function setInitialActiveState() {
        const scrollPosition = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionId = section.getAttribute('id');
            const sectionOffset = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));

                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            }
            
        });
    }
    
    // Call the function when the page loads
    setInitialActiveState();

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

            if (scrollPosition >= sectionOffset && scrollPosition <= sectionOffset + sectionHeight+1) {
                navLinks.forEach(link => link.classList.remove('active'));

                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });
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

const projectTitles = {
    'PortEZ': 'PortEZ',
    'FitHappens': 'FitHappens',
    'PersonalWebsite': 'Personal Website',
    'LSUTutoringApp': 'LSU Tutoring App'
};

const projectDetails = {
    'PortEZ': 'PortEZ is a user-friendly platform designed for computer science students to effortlessly create and showcase dynamic digital portfolios. Tailored features include color customization, pre-designed templates, and an advanced editor for a personalized touch. It aims to streamline the process of portfolio creation, allowing users to present academic and professional achievements uniquely.',
    'FitHappens': 'FitHappens is a web application empowering users to craft and share personalized workout plans. It facilitates the creation and exploration of diverse fitness routines within a community-driven platform.',
    'PersonalWebsite': 'A personal website I created to showcase my resume, projects, and achievements. The site features a sleek design, providing a visually appealing and user-friendly experience.',
    'LSUTutoringApp': 'A tutoring app for LSU students. Students are able to sign in with their school email and find tutors for specific subjects. Studetns can also rate tutors. Tutors have a different view than studetns, allowing them to see .'
};

const projectTech = {
    'PortEZ': 'HTML, TypeScript, CSS, React, FIGMA, GitHub, Firebase',
    'FitHappens': 'HTML, CSS, JavaScript, React, C#, ASP.NET Core, GitHub, Firebase, Microsoft SQL',
    'PersonalWebsite': 'HTML, CSS, JavaScript, GitHub',
    'LSUTutoringApp': 'JavaScript, React Native, FireBase, Node.js, Expo Go, GitHub'
};

const Image = {
    'PortEZ': 'images/PortEZ1.png',
    'FitHappens': 'images/FitHappens1.png',
    'PersonalWebsite': 'images/PersonalWeb1.png',
    'LSUTutoringApp': 'images/LSUTutoringApp1.png'
};

const moreDetails = {
    'PortEZ': 'https://docs.google.com/document/d/138zC68oINFe5LuMTqRzPflUO5PPgjLO9TVs0iQ68KMA/edit',
    'FitHappens': 'https://github.com/matterwin/csc3380',
    'PersonalWebsite': 'https://github.com/NichoDA/CVweb',
    'LSUTutoringApp': 'https://github.com/Brythe40/CSC4330ProjectGroupC'
};



//this function shows the project details when a project image is clicked
function showDetails(projectTitle) {
    // Get the detail container and title elements
    var detailContainer = document.getElementById('detailContainer');
    var detailTitle = document.getElementById('detailTitle');
    var projectDescription = document.getElementById('projectDescription');
    var projectTechnologies = document.getElementById('projectTechnologies');
    var projectImage = document.getElementById('projectImage');
    var overlay = document.getElementById('overlay');
    var projectDetailsLink = document.getElementById('projectDetailsLink');

    // Set the title and display the container
    detailTitle.textContent = projectTitles[projectTitle];
    projectDescription.textContent = projectDetails[projectTitle];
    projectTechnologies.textContent = projectTech[projectTitle];
    projectImage.src = Image[projectTitle];
    detailContainer.classList.add('active');
    overlay.style.display = 'block';

    // Set the link for "Project Details"
    projectDetailsLink.href = moreDetails[projectTitle];
    projectDetailsLink.target = '_blank'; 
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