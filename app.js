// Initialize variables
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let isScrolling = false;

// Add event listener for scrolling
window.addEventListener('scroll', debounce(checkSlide));

function checkSlide() {
  // If user is already scrolling, ignore this event
  if (isScrolling) return;

  // Set isScrolling to true
  isScrolling = true;

  // Get window height and scroll position
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;

  // Check if user has scrolled past the current slide
  const slideBottom = slides[currentSlide].offsetTop + slides[currentSlide].offsetHeight;
  if (slideBottom - windowHeight <= scrollPosition) {
    // Hide the current slide
    slides[currentSlide].style.display = 'none';

    // Move to next slide
    currentSlide++;

    // If we've reached the end of the slides, reset to the beginning
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    // Show the next slide
    slides[currentSlide].style.display = 'block';

    // Set isScrolling back to false
    isScrolling = false;
  } else {
    // User is not scrolling, so set isScrolling back to false
    isScrolling = false;
  }
}