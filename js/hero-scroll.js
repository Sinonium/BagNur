const btn = document.getElementById('scroll-btn');
const screenHeight = window.screen.height * 0.94

btn.onclick = function () {
    window.scrollTo(0, screenHeight);
}