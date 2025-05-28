// Script simples para animação na rolagem
document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll('section');
  animElements.forEach(el => {
    el.style.opacity = 1;
  });
});
