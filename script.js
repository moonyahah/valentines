let yesSize = 18;

// Start with cold background and snowflakes
document.body.classList.add('cold');
createSnowflakes();

function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snowflakes';
    document.body.appendChild(snowContainer);

    // Create 50 snowflakes
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';
        
        // Random horizontal position
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Random animation duration (10-20 seconds)
        snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random delay
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        
        // Random size
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        
        // Random opacity
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        
        snowContainer.appendChild(snowflake);
    }
}

function showPage2() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
}

function showPage3() {
    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");
}

function showPage4() {
    document.getElementById("page3").classList.add("hidden");
    document.getElementById("page4").classList.remove("hidden");
}

function showPage5() {
    document.getElementById("page4").classList.add("hidden");
    document.getElementById("page5").classList.remove("hidden");
}

function showPage6() {
    document.getElementById("page5").classList.add("hidden");
    document.getElementById("page6").classList.remove("hidden");
    
    // Transition to warm background
    document.body.classList.remove('cold');
    document.body.classList.add('warm');
    
    // Fade out snowflakes
    const snowContainer = document.getElementById('snowflakes');
    if (snowContainer) {
        snowContainer.classList.add('hidden');
    }
    
    // Play music
    const music = document.getElementById('valentineMusic');
    if (music) {
        music.play().catch(err => {
            console.log("Music autoplay blocked - user interaction needed");
        });
    }
    
    // Start hearts
    startHearts();
}

function yesClicked() {
    document.getElementById("page6").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
    
    // Extra warm celebration background
    document.body.classList.remove('warm');
    document.body.classList.add('celebration');
}

function moveButton() {
    let btn = document.getElementById("noBtn");

    let x = Math.random() * window.innerWidth * 0.8;
    let y = Math.random() * window.innerHeight * 0.8;

    btn.style.left = x + "px";
    btn.style.top = y + "px";

    // Grow Yes button
    yesSize += 5;
    document.getElementById("yesBtn").style.fontSize = yesSize + "px";
}

function startHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

function revealSecret() {
    const secretMsg = document.getElementById('secretMessage');
    const secretBtn = document.querySelector('.secret-btn');
    
    secretMsg.classList.remove('hidden');
    secretBtn.style.display = 'none';
}
