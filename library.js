document.querySelectorAll('.library-image').forEach(img => {
    img.addEventListener('click', () => {
        const selectedImage = img.getAttribute('data-src');
        localStorage.setItem('selectedLibraryImage', selectedImage);
        window.location.href = 'main.html';
    });
});
