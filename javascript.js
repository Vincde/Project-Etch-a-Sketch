function createPixel(size){
    const container = document.querySelector(".container");

    for(currentPixel = 0; currentPixel < size*size; currentPixel++ ){
        pixel = document.createElement('div');
        pixel.setAttribute("class", "pixel");
        pixel.addEventListener("pointerover", addRgb);

        container.appendChild(pixel);
        
    }

}

createPixel(16);





function addRgb(e){
    e.target.style = `background-color: rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;

    e.target.removeEventListener("pointerover",addRgb);

}






    
const b = document.querySelector('.reset-button');
    b.addEventListener('click',resetColor);

    function resetColor(){
        const allPixels = document.querySelectorAll(".pixel");
        allPixels.forEach((pixel) => pixel.style = 'background-color: "white" ');
    }
//function resets color.









//function below is never called

function resetContainer(){
    const allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach((pixel) => pixel.parentNode.removeChild(pixel));
    
    /* location.reload(); */
    
}