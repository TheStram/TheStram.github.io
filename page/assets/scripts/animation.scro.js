function handleAnimation(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }
  

  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver(handleAnimation, {
    threshold: 0.2,
  });
  
  elements.forEach((element) => {
    observer.observe(element);
  });
  