document.addEventListener('scroll', (e) => {
  const shouldShowScrollToTopButton = window.innerHeight < window.scrollY;

  const element = document.getElementById('scroll-top-button');

  if (!element) return;

  element.style.opacity = shouldShowScrollToTopButton ? '1': '0';
})
