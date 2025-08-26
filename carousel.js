const track = document.getElementById('carouselTrack');

// Enable swipe/drag scroll behavior
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  track.classList.add('dragging');
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('mouseleave', () => {
  isDown = false;
  track.classList.remove('dragging');
});

track.addEventListener('mouseup', () => {
  isDown = false;
  track.classList.remove('dragging');
});

track.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 2; // scroll speed
  track.scrollLeft = scrollLeft - walk;
});

// Touch support for mobile
track.addEventListener('touchstart', (e) => {
  isDown = true;
  startX = e.touches[0].pageX;
  scrollLeft = track.scrollLeft;
});

track.addEventListener('touchend', () => {
  isDown = false;
});

track.addEventListener('touchmove', (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2; // scroll speed
  track.scrollLeft = scrollLeft - walk;
});
