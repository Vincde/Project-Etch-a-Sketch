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
        pixel.addEventListener('pointerover',addRgb,{once : true});         //i'm executing it once because i need the function not to repeat the random numbers
        
            
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

    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click',resetGrid);
    
}


getSize();


function addRgb(e){
    let red,green,blue;
    let redDivide,blueDivide,greenDivide;
    
        
    red = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255); 
    e.target.style.backgroundColor = `rgb(${red},${blue},${green})`;    //this gets executed 1 time, so the variables are 1 for pixel
    
    redDivide = red / 10;
    greenDivide = green / 10;
    blueDivide = blue / 10;
    
    e.target.addEventListener('pointerover',()=>{      //then i add an eventListener that executes perfectly every time until it gets to dark
        if(red>=0){
        red = red - redDivide;
        green = green - greenDivide;
        blue = blue - blueDivide;
        e.target.style.backgroundColor = `rgb(${red},${blue},${green})`;
        }
    });
    
    /* tryThis(e); */        //this function is a try. it demonstrates that the event is linkable through various functions
    //under here are the things that should go into another function
    
    
}
                                                                                  //   ^
/* function tryThis(e){                                // function linked to the above |
    e.target.style.backgroundColor = `rgb(0,0,0)`;                                //   |
} */

function resetGrid(){
    const resetSinglePixel = document.querySelectorAll('.pixel-div');
    resetSinglePixel.forEach(pixel => pixel.parentElement.removeChild(pixel));
}