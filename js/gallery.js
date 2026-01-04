// Gallery functionality
// Images are loaded from data/images.json for easy updates

let images = [];
let currentIndex = 0;

const mainImage = document.getElementById('mainImage');
const currentIndexEl = document.getElementById('currentIndex');
const totalImagesEl = document.getElementById('totalImages');
const prevBtn = document.querySelector('.gallery-nav.prev');
const nextBtn = document.querySelector('.gallery-nav.next');

// Load images from JSON file
async function loadImages() {
    try {
        const response = await fetch('data/images.json');
        const data = await response.json();
        images = data.images;
        
        if (images.length > 0) {
            totalImagesEl.textContent = images.length;
            showImage(0);
        }
    } catch (error) {
        console.error('Error loading images:', error);
        // Fallback: show placeholder
        mainImage.src = 'images/placeholder.jpg';
        mainImage.alt = 'Gallery placeholder';
    }
}

function showImage(index) {
    if (images.length === 0) return;
    
    // Handle wrapping
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    
    currentIndex = index;
    
    const image = images[currentIndex];
    mainImage.src = image.url;
    mainImage.alt = image.caption || `Image ${currentIndex + 1}`;
    
    currentIndexEl.textContent = currentIndex + 1;
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

// Event listeners
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevImage();
    if (e.key === 'ArrowRight') nextImage();
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.gallery-wrapper').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.gallery-wrapper').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const threshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > threshold) {
        if (diff > 0) {
            nextImage();
        } else {
            prevImage();
        }
    }
}

// Initialize
loadImages();
