document.addEventListener('DOMContentLoaded', function () {
    const gallerybutton = document.querySelector('.gallerybutton');
    const gallery = document.querySelector('.gallery');

    const savedImages = JSON.parse(localStorage.getItem('galleryImages')) || [];

    savedImages.forEach(imageSrc => {
        const imageElement = createImageElement(imageSrc);
        gallery.appendChild(imageElement);
    });

    gallerybutton.addEventListener('click', function () {
        const imageUrl = prompt('Введіть URL зображення:');
        if (imageUrl) {
            const imageElement = createImageElement(imageUrl);
            gallery.appendChild(imageElement);

            saveToLocalStorage();
        }
    });

    function createImageElement(src) {
        const imageElement = document.createElement('img');
        imageElement.src = src;
        imageElement.classList.add('image');
        return imageElement;
    }

    function saveToLocalStorage() {
        const images = Array.from(gallery.children).map(image => image.src);
        localStorage.setItem('galleryImages', JSON.stringify(images));
    }

    window.addEventListener('beforeunload', function () {
        saveToLocalStorage();
    });
});