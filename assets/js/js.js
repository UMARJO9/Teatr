function changeImage(newSrc) {
    const mainImage = document.getElementById('mainImage');

    mainImage.style.opacity = 0;


    setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.style.opacity = 1;
    }, 500);
}