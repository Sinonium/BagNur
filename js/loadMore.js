const load = document.getElementById('loadMore')
const data = document.querySelector('.booking__block__data')
let bool = true;

load.onclick = function (){
    if (bool && window.screen.width <= 768){
        data.style.maxHeight = '3000px';
        load.innerHTML = 'Hide';
        bool = false;
        
    } else if (window.screen.width <= 768) {
        data.style.maxHeight = '900px'
        load.textContent = 'Load More'
        bool = true;
        window.scrollTo(0, 3830);
    }
}