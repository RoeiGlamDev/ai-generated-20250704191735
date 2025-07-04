// Add event listener to window load
window.addEventListener('load', () => {
    // Get all images with class fade-in
    const images = document.querySelectorAll('.fade-in');

    // Add event listener to window scroll
    window.addEventListener('scroll', () => {
        // Loop through each image
        images.forEach((image) => {
            // Get the image position
            const imagePosition = image.offsetTop;

            // Get the window scroll position
            const scrollPosition = window.scrollY;

            // Check if the image is in view
            if (scrollPosition >= imagePosition - window.innerHeight) {
                // Add class animated to the image
                image.classList.add('animated');
            }
        });
    });
});