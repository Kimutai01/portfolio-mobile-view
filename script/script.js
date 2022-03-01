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
