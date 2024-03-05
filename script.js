// parallax effect
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card');
  document.addEventListener('mousemove', (e) => {
    const rotationReducerValue = 400
    const x = (e.clientX - window.innerWidth / 2) / rotationReducerValue;
    const y = (window.innerHeight / 2 - e.clientY) / rotationReducerValue;
    card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  })
});