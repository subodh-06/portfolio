
  document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
      const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
      mobileMenuButton.setAttribute('aria-expanded', !expanded);
      mobileMenu.classList.toggle('hidden');
    });
  });


  // Smooth scrolling function
  function smoothScrollToAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Event listener for About link
  const aboutLink = document.querySelector('a[href="#about"]');
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    smoothScrollToAbout(); // Call smooth scrolling function
  });


