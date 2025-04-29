
document.addEventListener('DOMContentLoaded', () => {
    const data = [
        { profession: "Website Developer", nickname: "SMILE264", description: "Легендарний шукач пригод, завжди готовий до нових викликів!" },
        { profession: "Frontend Developer", nickname: "Reqzire_", description: "Мудрий маг, що керує стихіями і володіє стародавніми знаннями." },
        { profession: "Game Designer", nickname: "MrZ3NE", description: "Невловимий воїн, чий меч блискає швидше за блискавку." },
        { profession: "Nature Master", nickname: "avana739", description: "Майстер природи, захищає ліси та тварин від будь-якої загрози." }
    ];

    const imageItems = document.querySelectorAll('.image-item');
    const descLayer = document.getElementById('description-layer');

    imageItems.forEach((item, index) => {
        const img = item.querySelector('img');

        item.addEventListener('mouseenter', () => {
            removeExistingDescription();

            const rect = item.getBoundingClientRect();

            const desc = document.createElement('div');
            desc.classList.add('dynamic-description');

            const arrow = document.createElement('div');
            arrow.classList.add('arrow');

            const topRow = document.createElement('div');
            topRow.classList.add('top-row');

            const profession = document.createElement('div');
            profession.classList.add('profession');
            profession.innerText = data[index].profession;

            const nickname = document.createElement('div');
            nickname.classList.add('nickname');
            nickname.innerText = data[index].nickname;

            const divider = document.createElement('div');
            divider.classList.add('divider');

            const description = document.createElement('div');
            description.classList.add('description');
            description.innerText = data[index].description;

            topRow.appendChild(profession);
            topRow.appendChild(nickname);
            desc.appendChild(arrow);
            desc.appendChild(topRow);
            desc.appendChild(divider);
            desc.appendChild(description);

            desc.style.position = 'fixed';
            desc.style.background = 'rgb(255, 229, 172)';
            desc.style.color = 'white';
            desc.style.padding = '10px 15px';
            desc.style.borderRadius = '8px';
            desc.style.fontSize = '16px';
            desc.style.fontWeight = '600';
            desc.style.opacity = '0';
            desc.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            desc.style.maxWidth = '250px';
            desc.style.textAlign = 'center';
            desc.style.zIndex = '1000';
            desc.style.pointerEvents = 'none';

            if (index === 0) {
                desc.style.left = (rect.left - 270) + "px";
                desc.style.top = (rect.top + rect.height / 2 - 30) + "px";
                arrow.style.left = '100%';
                arrow.style.top = '50%';
                arrow.classList.add('arrow-right');
            } 
            else if (index === 1) {
                desc.style.left = (rect.left + rect.width/2 - 125) + "px";
                desc.style.top = (rect.bottom + 25) + "px";
                arrow.style.top = '-10px';
                arrow.style.left = '50%';
                arrow.classList.add('arrow-up');
            }
            else if (index === 2) {
                desc.style.left = (rect.left + rect.width/2 - 125) + "px";
                desc.style.top = (rect.top - 130) + "px";
                arrow.style.top = '100%';
                arrow.style.left = '50%';
                arrow.classList.add('arrow-down');
            }
            else if (index === 3) {
                desc.style.left = (rect.right + 5) + "px";
                desc.style.top = (rect.top + rect.height / 2 - 30) + "px";
                arrow.style.left = '-10px';
                arrow.style.top = '50%';
                arrow.classList.add('arrow-left');
            }

            descLayer.appendChild(desc);

            setTimeout(() => {
                desc.style.opacity = '1';
            }, 10);

            img.style.filter = "brightness(1.3)";
        });

        item.addEventListener('mouseleave', () => {
            removeExistingDescription();
            img.style.filter = "brightness(1)";
        });
    });

    function removeExistingDescription() {
        descLayer.innerHTML = '';
    }
});

