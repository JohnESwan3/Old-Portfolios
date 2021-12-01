const navbar = document.getElementById('navbar');

// Smooth Scrolling
$('#navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top,
      },
      100
    );
  }
});

// Add active class to selected link
document.addEventListener('DOMContentLoaded', () => {
  let pageBtns = document.querySelectorAll('.pageBtn');
  pageBtns.forEach(function (a) {
    a.addEventListener('click', () => {
      pageBtns.forEach((b) => b.classList.remove('active'));
      a.classList.add('active');
    });
  });
});

// Scroll to top on refresh
$(document).ready(function () {
  $(this).scrollTop(0);
});
