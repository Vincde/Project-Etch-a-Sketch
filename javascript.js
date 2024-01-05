const container = document.querySelector('.big-container');
let loopVariable;


for(let i = 0; i < 16; i++){
    loopVariable = document.createElement('div');
    loopVariable.className = 'sixteenDiv';
    container.appendChild(loopVariable);
}

