const openButn = document.querySelector('#menu-icon');
const closeButn = document.querySelector('#closeBtn');
const mobileNav = document.querySelector('.mob-wel');
const mobileMen = document.querySelector('.mobil-men');
const linkId = document.querySelector('#link');
const links = document.querySelector('#links');
const lin = document.querySelector('#linkss');

closeButn.addEventListener('click', () => {
  mobileMen.style.display = 'none';
  mobileMen.style.width = '0%';
  mobileNav.style.display = 'block';
});

openButn.addEventListener('click', () => {
  mobileMen.style.height = '100vh';
  mobileMen.style.width = '100%';
  mobileMen.style.display = 'block';
  closeButn.style.display = 'block';
  mobileNav.style.display = 'none';
});

linkId.addEventListener('click', () => {
  mobileMen.style.display = 'none';
  mobileNav.style.display = 'block';
});

links.addEventListener('click', () => {
  mobileMen.style.display = 'none';
  mobileNav.style.display = 'block';
});

lin.addEventListener('click', () => {
  mobileMen.style.display = 'none';
  mobileNav.style.display = 'block';
});

const projects = [{
  title: 'Keeping track of hundreds of components',
  image: 'assets/images/Snapshoot.svg',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  language1: 'Github',
  language2: 'Codepen',
  language3: 'JavaScript',
  language4: 'Bootstrap',
  language5: 'css',
  language6: 'Terminal',
  language7: 'Codekit',
  language8: 'Ruby on Rails',
}];

const [project] = projects;

const button = document.querySelectorAll('.works-button');
const popup = document.querySelector('.popup-window');

popup.innerHTML = `<div class="container">
<button class="close-button"><i class="fa fa-times"></i></button>
<img src=${project.image} alt="project-img" class="popup-img">
<div class="header-container">
    <h2 class="container-title">${project.title}</h2>
    <div class="desktop butt">
<button class='seelive'>See Live<span><img src="assets/images/live.svg" alt="live"></span></button>
</div>
<div class='source butt'>
<button class='seesource'>See Source<span><img src="assets/images/source.png" alt="source"></span></button>
</div>
</div>
<ul class="skillsb">
<li class="mobile">${project.language1}</li>
<li class="mobile">${project.language2}</li>
<li class="mobile">${project.language3}</li>
<li class="desktop">${project.language4}</li>
<li class="desktop">${project.language5}</li>
<li class="desktop">${project.language6}</li>
<li class="desktop">${project.language7}</li>
<li class="desktop">${project.language8}</li>
</ul>
<p class="description">${project.description}</p>
<div class="buttons non">
<button>See Live<span><img src="assets/images/live.svg" alt="github"></span></button>
<button>See Source<span><img src="assets/images/source.png" alt="github"></span></button>
</div>
</div>`;
const close = document.querySelector('.close-button');
close.addEventListener('click', () => {
  popup.classList.replace('window', 'disappear');
  document.body.classList.remove('permanent');
});

button.forEach((but) => {
  but.addEventListener('click', () => {
    document.body.classList.add('permanent');
    popup.classList.replace('disappear', 'window');
  });
});
