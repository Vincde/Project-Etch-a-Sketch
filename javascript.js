function createPixel(size){
    
    if(size > 100){
        alert('ATTENTION! you inserted a number > 100 ! you can\'t do that.');
        return 0;
    }

    const bigContainer = document.querySelector('.big-container');
    let number = (500/(size));
    for(i = 0;i < size * size; i++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel-div');
        pixel.style.width = `${number}px`;
        pixel.style.height = `${number}px`;
        pixel.addEventListener('pointerover',addRgb);
            
        bigContainer.appendChild(pixel);
    }
    
}



function getSize(){
        const buttonSize = document.querySelector('.button-size');
        const inputSize = document.querySelector('#input-size');
        let num;
        
    inputSize.addEventListener('input',(e) =>{
        num = e.target.value;
    });
    

    buttonSize.addEventListener('click',function (e){
        e.preventDefault();
        createPixel(num);
    });
    
}

getSize();


function addRgb(e){
    e.target.style.backgroundColor = 'black';
}