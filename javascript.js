

function startHere(){                                                                         /* name of the function is to be changed . */
                                 // this function only works to start the code itself, it's not really the result

createContainer();   //function to create containers

}


function createContainer(){
    /*  let rows; */                 
                            //  useless?
    const container = document.querySelector('.big-container'); 
    let column;
    for(let i = 0;i < 16; i++){
        for(let j = 0; j < 16; j++){
            column = document.createElement('div');
            column.className = 'squares-dimensions';
            container.appendChild(column);
        }
    }
}
//this code creates all divs without function call. as the function is added to the code they disappear

createContainer();