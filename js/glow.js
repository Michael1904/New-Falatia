
  document.addEventListener('DOMContentLoaded', () => {
    const glow = document.getElementById('cursor-glow');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const followMouse = () => {
      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
      requestAnimationFrame(followMouse);
    };

    followMouse();
  });

