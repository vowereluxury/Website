const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const items = track.querySelectorAll('.carousel-item');
let currentIndex = 0;

function getVisibleItems() {
  if (window.innerWidth <= 768) return 1;   // mobile
  if (window.innerWidth <= 1024) return 2;  // tablet
  return 3;                                 // desktop
}

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 20; // include gap
  const visibleItems = getVisibleItems();

  // only use transform for arrows, not for swipe
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

  // disable buttons when at edges
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= items.length - visibleItems;
}

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - getVisibleItems(), 0);
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + getVisibleItems(), items.length - getVisibleItems());
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();
