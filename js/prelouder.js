window.addEventListener('load', () => {
    setTimeout(() => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => preloader.remove(), 300);
      }
    }, 300); 
  });


  const links = document.querySelectorAll('a');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('javascript')) {
      link.addEventListener('click', e => {
        e.preventDefault();


        document.body.insertAdjacentHTML('beforeend', `
          <div id="preloader">
            <div class="loader">
              <div class="box box1"></div>
              <div class="box box2"></div>
              <div class="box box3"></div>

              <div class="box box8"></div>
              <div class="empty"></div>
              <div class="box box4"></div>

              <div class="box box7"></div>
              <div class="box box6"></div>
              <div class="box box5"></div>
            </div>
          </div>
        `);

        setTimeout(() => {
          window.location.href = href;
        }, 300); 
      });
    }
  });




  document.addEventListener("DOMContentLoaded", () => {
    const sequence = ['box1','box2','box3','box4','box5','box6','box7','box8'];
    let current = 0;

    const loop = () => {
      const all = document.querySelectorAll('.loader .box');
      all.forEach(el => el.classList.remove('active'));

      const activeBox = document.querySelector(`.loader .${sequence[current]}`);
      if (activeBox) activeBox.classList.add('active');

      current = (current + 1) % sequence.length;
    };

    loop();
    const interval = setInterval(loop, 120); 

    window.addEventListener('load', () => {
      setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
          preloader.classList.add('hide');
          clearInterval(interval);
          setTimeout(() => preloader.remove(), 600); 
        }
      }, 500);
    });
  });

