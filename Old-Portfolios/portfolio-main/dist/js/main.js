// Set page state
const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };

  this.change = function (state) {
    currentState = state;
  };
};

// Page States - Need to write HTML and import to JS states
// Home State - Blank page with background
const homeState = function (page) {
  document.querySelector('#home-page').classList.add('hidden');
  document.querySelector('#header').classList.remove('header-hidden');
};

const page = new PageState();
page.init();

// Page states are in their own .js files for legibility

// UI Variables
const home = document.getElementById('home'),
  about = document.getElementById('about'),
  projects = document.getElementById('projects'),
  contact = document.getElementById('contact');

// Home button event listener
home.addEventListener('click', (e) => {
  page.change(new homeState());
  e.preventDefault();
});

// About button event listener
about.addEventListener('click', (e) => {
  page.change(new aboutState());
  e.preventDefault();
});

// Projects button event listener
projects.addEventListener('click', (e) => {
  page.change(new projectsState());
  e.preventDefault();
});

// Contact button event listener
contact.addEventListener('click', (e) => {
  page.change(new contactState());
  e.preventDefault();
});

// Button Glow on selected
document.addEventListener('DOMContentLoaded', () => {
  let appBtns = document.querySelectorAll('.app');
  appBtns.forEach(function (btn) {
    btn.addEventListener('click', () => {
      appBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});
