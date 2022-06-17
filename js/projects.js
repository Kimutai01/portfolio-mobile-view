const wrapper = document.getElementById('wrapper');
const body = document.getElementById('page-body');
const recentWorks = document.querySelector('.recent-works-cards');
const modalbody = document.querySelector('.project-popup-window');
const projectImage = document.querySelector('.pop-up-overlay-image');
const projectTitle = document.querySelector('.project-title');
const projectTechnologies = document.querySelector('.lang-tags');
const projectDescription = document.querySelector('.description');
const liveLink = document.querySelector('.live-view');
const sourceCode = document.querySelector('.source-code');
const closeProject = document.querySelector('.close');
const previousButton = document.querySelector('.prevProject');
const nextButton = document.querySelector('.nextProject');
const projectsData = [
  {
    id: 0,
    name: 'To Do List',
    image: 'assets/images/design.png',
    description:
      'A website that helps you keep track of your todos. You can add a todo, remove it and mark it as done.',
    technologies: ['JavaScript', 'HTML/CSS', 'Webpack'],
    live: 'https://kimutai01.github.io/todo-list/',
    source: 'https://github.com/Kimutai01/todo-list.git',
  },
  {
    id: 1,
    name: 'Working on the project',
    image: 'assets/images/projects/portfolio-view.png',
    description: "I'm working on the project",
    technologies: ['React', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://kimutai01.github.io/portfolio-mobile-view/',
    source: 'https://github.com/Kimutai01/portfolio-mobile-view.git',
  },
  {
    id: 2,
    name: 'Working on the project',
    image: 'assets/images/projects/portfolio-view.png',
    description: "I'm working on the project",
    technologies: ['Ruby on Rails', 'CSS', 'React', 'HTML'],
    live: 'https://kimutai01.github.io/portfolio-mobile-view/',
    source: 'https://github.com/Kimutai01/portfolio-mobile-view.git',
  },
  {
    id: 3,
    name: 'Working on the project',
    image: 'assets/images/projects/portfolio-view.png',
    description: "I'm working on the project",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://kimutai01.github.io/portfolio-mobile-view/',
    source: 'https://github.com/Kimutai01/portfolio-mobile-view.git',
  },
  {
    id: 4,
    name: 'Working on the project',
    image: 'assets/images/projects/portfolio-view.png',
    description: "I'm working on the project",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://kimutai01.github.io/portfolio-mobile-view/',
    source: 'https://github.com/Kimutai01/portfolio-mobile-view.git',
  },
  {
    id: 5,
    name: 'Working on the project',
    image: 'assets/images/projects/portfolio-view.png',
    description: "I'm working on the project",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    live: 'https://kimutai01.github.io/portfolio-mobile-view/',
    source: 'https://github.com/Kimutai01/portfolio-mobile-view.git',
  },
];

projectsData.forEach((project) => {
  recentWorks.innerHTML += `
    <div class="works work${project.id}">
      <div class="work-details">
        <h3>${project.name}</h3>
        <ul class="language-tags">
          ${project.technologies.map((tech) => `<li>${tech}</li>`).join('')}
        </ul>
        <button id="${project.id}" class="works-button">See Project</button>
      </div>
    </div> `;
});

function disablePreviousOrNextButton() {
  if (previousButton.id <= 0) {
    previousButton.style.visibility = 'hidden';
  } else if (nextButton.id >= projectsData.length - 1) {
    nextButton.style.visibility = 'hidden';
  } else {
    previousButton.style.visibility = 'visible';
    nextButton.style.visibility = 'visible';
  }
}
function populatePopup(object) {
  projectImage.src = projectsData[object].image;
  projectTitle.textContent = projectsData[object].name;
  projectTechnologies.innerHTML = projectsData[object].technologies
    .map((tech) => `<li>${tech}</li>`)
    .join('');
  projectDescription.textContent = projectsData[object].description;
  liveLink.href = projectsData[object].live;
  sourceCode.href = projectsData[object].source;
  previousButton.id = projectsData[object].id;
  nextButton.id = projectsData[object].id;
  wrapper.classList.add('blur');
  body.classList.add('color');
  disablePreviousOrNextButton();
}

function closePopup(closeButton) {
  closeButton.addEventListener('click', () => {
    modalbody.style.display = 'none';
    wrapper.classList.remove('blur');
    body.classList.remove('color');
  });
}
closePopup(closeProject);

const projectButtons = document.querySelectorAll('.works-button');
projectButtons.forEach((button) => button.addEventListener('click', () => {
  populatePopup(Number(button.id));
  modalbody.style.display = 'block';
}));

function goToPreviousProject() {
  populatePopup(Number(previousButton.id) - 1);
}

function goToNextProject() {
  populatePopup(Number(nextButton.id) + 1);
}

previousButton.addEventListener('click', goToPreviousProject);
nextButton.addEventListener('click', goToNextProject);
