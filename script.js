document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  });
  
  // Reveal animations on scroll
  const reveals = document.querySelectorAll('.reveal');
  
  function checkReveal() {
    reveals.forEach(reveal => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Check on page load
  
  // Add reveal class to elements
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('reveal');
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Header background on scroll
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
    } else {
      header.style.backgroundColor = 'rgba(10, 25, 47, 0.85)';
    }
  });
});