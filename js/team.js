const teamMembers = [
    {
        name: "Ben",
        role: "WEBSITE DEVELOPER",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: "./img/smile.png"
    },
    {
        name: "Alex",
        role: "GAME DESIGNER",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: "./img/avana.png"
    },
    {
        name: "Ben",
        role: "COMMUNITY MANAGER",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        image: "./img/mrz3ne.png"
    }
];

let currentIndex = 0;
let slideInterval;
const progressFill = document.querySelector(".progress-fill");

function startSlideTimer() {
    clearInterval(slideInterval);
    progressFill.style.transition = "none";
    progressFill.style.width = "0%";
    setTimeout(() => {
        progressFill.style.transition = "width 20s linear";
        progressFill.style.width = "100%";
    }, 10);
    slideInterval = setInterval(() => {
        nextSlide();
    }, 20000);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % teamMembers.length;
    updateTeamCard();
}

function updateTeamCard() {
    const teamCard = document.querySelector(".team-card");
    const teamImage = document.querySelector(".team-image");
    teamCard.style.opacity = "0";
    teamCard.style.transform = "translateY(20px)";
    teamImage.style.opacity = "0";
    teamImage.style.transform = "scale(0.8)";
    
    setTimeout(() => {
        document.querySelector(".team-name-text").textContent = teamMembers[currentIndex].name;
        document.querySelector(".role-badge").textContent = teamMembers[currentIndex].role;
        document.querySelector(".team-description").textContent = teamMembers[currentIndex].description;
        document.querySelector(".team-image img").src = teamMembers[currentIndex].image;
        teamCard.style.opacity = "1";
        teamCard.style.transform = "translateY(0)";
        teamImage.style.opacity = "1";
        teamImage.style.transform = "scale(1)";
    }, 300);
    startSlideTimer();
}

document.querySelector(".prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    updateTeamCard();
});

document.querySelector(".next-btn").addEventListener("click", () => {
    nextSlide();
});

updateTeamCard();