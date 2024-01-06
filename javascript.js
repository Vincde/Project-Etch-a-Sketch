const container = document.querySelector('.big-container');
let loopVariable;


for(let i = 0; i < 16; i++){
    loopVariable = document.createElement('div');
    loopVariable.className = 'sixteen-div';
    container.appendChild(loopVariable);
}

const allDivs = document.querySelector('.sixteen-div');
const changeColor = document.createElement('div');
changeColor.style.width = 0 + 'px';
changeColor.style.height = 0 + 'px';            /* this width and height are only the dimensions of the div, not its position in the page */
                                                // see for position:absolute, maybe u need it
changeColor.style.border = '5px solid red';    /* red div is visible */
container.appendChild(changeColor);




allDivs.addEventListener('mouseover',(event) => {                   /* this event is not read by the website. */
    let x,y;
    x = event.clientX;
    y = event.clientY;
    changeColor.style.width = x + 'px';
    changeColor.style.height = y + 'px';
    changeColor.style.backgroundColor= 'red';
    
});