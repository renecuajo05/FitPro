let lastScrollTop = 0;
const tab = document.getElementById('scroll-tab');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if (scrollTop > lastScrollTop) {
     // Scroll hacia abajo
     tab.classList.add('hidden');
   } else {
     // Scroll hacia arriba
     tab.classList.remove('hidden');
   }

   lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
});
