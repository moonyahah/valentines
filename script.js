let yesSize = 18;

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
    startHearts();
}

function yesClicked() {
    document.getElementById("page6").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");
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
