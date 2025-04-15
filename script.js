// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Function to check if an element is in view
function checkVisibility() {
    const elements = document.querySelectorAll('.pop-up'); // Select all elements with the 'pop-up' class
    elements.forEach(element => {
      const rect = element.getBoundingClientRect(); // Get the position of the element
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // If the element is in view, add the 'visible' class to animate it
        element.classList.add('visible');
      } else {
        // If it's out of view, remove the 'visible' class
        element.classList.remove('visible');
      }
    });
  }
  
  // Run checkVisibility on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Check visibility on page load (in case elements are already in view)
  document.addEventListener('DOMContentLoaded', checkVisibility);
  function slideAndNavigate(pageUrl) {
    // Add the sliding class to body to trigger the animation
    document.body.classList.add('sliding');
  
    // Wait for the animation to complete (500ms here, adjust as needed)
    setTimeout(function() {
      // Redirect to the new page after the animation finishes
      window.location.href = pageUrl;
    }, 500); // Match this time with your animation duration
  }
  document.querySelector('a[href="#join"]').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#join');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });    
  
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
});
