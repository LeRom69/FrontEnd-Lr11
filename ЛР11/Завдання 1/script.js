document.querySelector('.loadDogImages').addEventListener('click', function () {
    loadDogImages();
});

function loadDogImages() {

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            addImageToGallery(data.message);
        })
        .catch(error => {
            console.error('Помилка при отриманні фотографії собаки', error);
        });
}

function addImageToGallery(imageUrl) {

    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    document.querySelector('.gallery').appendChild(imgElement);
}