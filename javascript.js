function createPixel(size){
    
    const bigContainer = document.querySelector('.big-container');
    let number = (500/(size));
    for(i = 0;i < size * size; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel-div');
        pixel.style.width = `${number}px`;
        pixel.style.height = `${number}px`;
        pixel.addEventListener('click',addRgb);
            
        bigContainer.appendChild(pixel);
    }
    
}




createPixel(16);


function addRgb(e){
    e.style.backgroundColor = 'black';
}