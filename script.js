
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      
      // تصحیح: استفاده از backtick (`) نه single quote (')
      const dataDelay = element.getAttribute('data-delay');
      if (dataDelay) {
        element.style.setProperty('--custom-delay', `${dataDelay}ms`);
      }
      
      element.classList.add('appear');
    } else {
      entry.target.classList.remove('appear');
    }
  });
}, { threshold: 0.1 });

// تصحیح سلکتورها - استفاده از کاما
document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-top, .fade-in-bottom').forEach(el => {
  observer.observe(el);
});




//********************************************* */


  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-section, .timeline-item, .product-gallery img').forEach(el => observer2.observe(el));

  //********************************************* */