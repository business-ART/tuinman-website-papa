'user strict';



document.querySelector('.about-nav').addEventListener('click', function () {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});


document.querySelector('.blog-nav').addEventListener('click', function () {
  document.querySelector('#blog').scrollIntoView({ behavior: 'smooth'});
});


document.querySelector('.reviews-nav').addEventListener('click', function () {
  document.querySelector('#reviews').scrollIntoView({ behavior: 'smooth'});
});


document.querySelector('.git-btn').addEventListener('click', function () {
  document.querySelector('#git-form').scrollIntoView({ behavior: 'smooth'});
});

































const slider = document.querySelector('.work-results');

let isDown = false;
let startX;
let scrollLeft;
let velocity = 0;
let momentumID;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  cancelMomentum();
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  beginMomentum();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
  velocity = walk; // track speed for momentum
});

// Momentum scrolling
function beginMomentum() {
  cancelMomentum();
  momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentum() {
  cancelAnimationFrame(momentumID);
}

function momentumLoop() {
  slider.scrollLeft -= velocity;
  velocity *= 0.95; // friction
  if (Math.abs(velocity) > 0.5) {
    momentumID = requestAnimationFrame(momentumLoop);
  }
}