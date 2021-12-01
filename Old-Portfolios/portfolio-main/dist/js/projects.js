// Projects State
const projectsState = function (page) {
  document.querySelector('#home-page').classList.remove('hidden');
  document.querySelector('#header').classList.add('header-hidden');
  // Remove page-specific classes
  document.querySelector('#home-page').classList.remove('about-page');
  document.querySelector('#home-page').classList.remove('contact-page');

  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="header bg-glass border-header">
      <h1 class="title">Projects</h1>
    </div>
    `;
};
