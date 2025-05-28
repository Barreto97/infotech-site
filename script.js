
document.addEventListener("DOMContentLoaded", function() {
  const instaFeed = document.getElementById('insta-feed');
  instaFeed.innerHTML = '<iframe src="https://snapwidget.com/embed/123456" class="insta-widget" allowtransparency="true" frameborder="0" scrolling="no" style="width:100%;height:300px;"></iframe>';

  const animElements = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animElements.forEach(el => observer.observe(el));
});
