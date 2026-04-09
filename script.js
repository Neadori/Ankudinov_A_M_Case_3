
const seasons = [
    {
        name: "Весна",
        mainImg: "весна.webp",
        leftImg: "зима.jpg",
        rightImg: "лето.webp",
        bgGradient: "linear-gradient(135deg, #a8e6ff, #6cb2eb)" 
    },
    {
        name: "Лето",
        mainImg: "лето.webp",
        leftImg: "весна.webp",
        rightImg: "осень.webp",
        bgGradient: "linear-gradient(135deg, #9bdeac, #4caf50)" 
    },
    {
        name: "Осень",
        mainImg: "осень.webp",
        leftImg: "лето.webp",
        rightImg: "зима.jpg",
        bgGradient: "linear-gradient(135deg, #ffb347, #ff7e05)" 
    },
    {
        name: "Зима",
        mainImg: "зима.jpg",
        leftImg: "весна.webp",
        rightImg: "осень.webp",
        bgGradient: "linear-gradient(135deg, #e0eafc, #cfdef3)" 
    }
];

let currentIndex = 0; 


const centerImg = document.querySelector('#centerImage img');
const leftImg = document.querySelector('#leftImage img');
const rightImg = document.querySelector('#rightImage img');
const captionEl = document.getElementById('caption');
const dynamicBg = document.getElementById('dynamicBg');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counterEl = document.getElementById('imageCounter');

function updateCounter() {
    const currentNumber = currentIndex + 1;
    const totalNumber = seasons.length;
    counterEl.textContent = `Изображение ${currentNumber} из ${totalNumber}`;
    counterEl.style.transform = 'scale(1.01)';
    setTimeout(() => {
        counterEl.style.transform = 'scale(1)';
    }, 200);
}





function changeBackground(gradient) {
    dynamicBg.style.background = gradient;
}


function updateGallery(direction = 'next') {
    captionEl.classList.add('fade-out');
    centerImg.classList.add('fade-img');
    setTimeout(() => {
        const currentSeason = seasons[currentIndex];
        const leftIndex = (currentIndex - 1 + seasons.length) % seasons.length;
        const rightIndex = (currentIndex + 1) % seasons.length;
        centerImg.src = currentSeason.mainImg;
        leftImg.src = seasons[leftIndex].mainImg;
        rightImg.src = seasons[rightIndex].mainImg;
        captionEl.textContent = currentSeason.name;
        changeBackground(currentSeason.bgGradient);
        updateCounter();
        captionEl.classList.remove('fade-out');
        centerImg.classList.remove('fade-img');
        
        
        void centerImg.offsetWidth;
    }, 200);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % seasons.length;
    updateGallery('next');
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + seasons.length) % seasons.length;
    updateGallery('prev');
}

function initGallery() {

    const spring = seasons[0];
    centerImg.src = spring.mainImg;
    leftImg.src = seasons[3].mainImg;   
    rightImg.src = seasons[1].mainImg;  
    captionEl.textContent = spring.name;
    changeBackground(spring.bgGradient);
    
    
    updateCounter();
    
    
    captionEl.classList.remove('fade-out');
    centerImg.classList.remove('fade-img');
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

initGallery();

function preloadImages() {
    seasons.forEach(season => {
        const img = new Image();
        img.src = season.mainImg;
        const imgLeft = new Image();
        imgLeft.src = season.leftImg;
        const imgRight = new Image();
        imgRight.src = season.rightImg;
    });
}
preloadImages();