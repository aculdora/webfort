// Get the "Contact Me" link from the navbar
const contactMeLink = document.querySelector('#contact-me-link');

// Get the element that contains the "contactMe" section
const contactMeSection = document.querySelector('#contactMe');

// Scroll to the "contactMe" section when the "Contact Me" link is clicked
contactMeLink.addEventListener('click', () => {
  contactMeSection.scrollIntoView({ behavior: 'smooth' });
});