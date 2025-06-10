// Toggle mobile navigation
function toggleMobileNav() {
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  nav.classList.toggle('open');
  const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', !expanded);
}

document.querySelector('.burger').addEventListener('click', toggleMobileNav);

// Smooth scrolling for nav links
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const target = document.querySelector(targetId);
  target.scrollIntoView({ behavior: 'smooth' });
  // Close nav after selection on mobile
  if (window.innerWidth <= 768) toggleMobileNav();
}

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Validate contact form
function validateContactForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !emailRegex.test(email) || !message) {
    alert('Please fill out all fields with a valid email.');
    return;
  }
  const data = { name, email, message };
  console.log(JSON.stringify(data));
  alert('Message sent!');
  document.getElementById('contact-form').reset();
}

document.getElementById('contact-form').addEventListener('submit', validateContactForm);
