
// Simples script para animação na rolagem, se quiser depois pode melhorar
document.addEventListener('DOMContentLoaded', () => {
  const animElements = document.querySelectorAll('.animate');
  animElements.forEach(el => {
    el.style.opacity = 1;
  });
});
