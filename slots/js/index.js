function btnAnimate() {
    const btn = document.querySelector(".btn-container");
    btn.style.boxShadow = "0px 0px 12px 12px rgb(255, 0, 0)";
    btn.style.color = "red";
    
    setTimeout(() => {
        btn.style.boxShadow = "none";
        btn.style.color = "whitesmoke";
    }, 200);
}


function randBruh() {
    return Math.floor(Math.random() * (6) + 1);
}


function animateNum(number) {
    for (let i=0;i<10;i++) {
        setTimeout(() => {
            const num = randBruh();
            number.textContent = num;
        }, 100 * i);
    }
}


function flicker() {
    const flick = document.querySelector(".msg-container");
    const msg = document.querySelector(".msg-text");
    flick.style.animation = "flicker 0.7s";
    flick.style.animationIterationCount = "5";
    msg.textContent = "FUCKEN WINNER";

    flick.addEventListener("animationend", function handleAnimationEnd() {
        flick.style.animation = "none";
        msg.textContent = "SPIN TO WIN";
        flick.removeEventListener("animationend", handleAnimationEnd);
    });
}


function checkWin() {
    const left = document.querySelector(".left-text").textContent;
    const mid = document.querySelector(".mid-text").textContent;
    const right = document.querySelector(".right-text").textContent;

    if (left === mid && mid === right) {
        flicker();
    }
}


function spinBtn() {
    btnAnimate();
    animateNum(document.querySelector(".left-text"));
    setTimeout(() => {
        animateNum(document.querySelector(".mid-text"));
    }, 400);
    setTimeout(() => {
        animateNum(document.querySelector(".right-text"));
    }, 800);
    setTimeout(checkWin, 1800);
}


document.querySelector(".btn-container").addEventListener("mousedown", spinBtn);
