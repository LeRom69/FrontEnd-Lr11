document.addEventListener('DOMContentLoaded', function () {
  const galleryContainer = document.getElementById('galleryContainer');
  const fullscreenBtn = document.querySelector('.fullscreenBtn');

  fullscreenBtn.addEventListener('click', function () {
    galleryContainer.classList.toggle('fullscreen');
    
    if (galleryContainer.classList.contains('fullscreen')) {
      document.body.style.overflow = 'hidden'; 
    }
  });

});