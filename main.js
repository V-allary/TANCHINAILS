// main.js

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Handle subscription form
  const subscribeForm = document.querySelector("#subscribe-form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      const email = document.querySelector("#subscribe-email").value;
  
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
      alert(result.message);
    });
  }