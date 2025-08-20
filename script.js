document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const closeMenu = document.querySelector('.close-menu');
  const fullscreenNav = document.querySelector('.fullscreen-nav');

  if (burgerMenu && closeMenu && fullscreenNav) {
    const navLinks = fullscreenNav.querySelectorAll('.nav-link');
    function positionCloseMenu() {
      const rect = burgerMenu.getBoundingClientRect();
      closeMenu.style.position = 'fixed';
      closeMenu.style.top = `${rect.top}px`;
      closeMenu.style.left = `${rect.left}px`;
      closeMenu.style.width = `${rect.width}px`;
      closeMenu.style.height = `${rect.height}px`;
      closeMenu.style.right = 'auto';
      closeMenu.style.bottom = 'auto';
    }

    positionCloseMenu();
    window.addEventListener('resize', positionCloseMenu);

    burgerMenu.addEventListener('click', () => {
      positionCloseMenu();
      fullscreenNav.classList.add('active');
      burgerMenu.classList.add('hidden');
      closeMenu.classList.remove('hidden');
    });

    closeMenu.addEventListener('click', () => {
      fullscreenNav.classList.remove('active');
      burgerMenu.classList.remove('hidden');
      closeMenu.classList.add('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        fullscreenNav.classList.remove('active');
        burgerMenu.classList.remove('hidden');
        closeMenu.classList.add('hidden');
      });
    });
  }

  const languageLinks = document.querySelectorAll('.language-toggle a');
  if (languageLinks.length) {
    const saved = localStorage.getItem('selectedLanguage') || languageLinks[0].textContent.trim();
    languageLinks.forEach(link => {
      if (link.textContent.trim() === saved) {
        link.classList.add('active');
      }
      link.addEventListener('click', () => {
        localStorage.setItem('selectedLanguage', link.textContent.trim());
      });
    });
  }
});
