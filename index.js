let gridSize = 16;
const gameContainer = document.querySelector('.game-container');



// Change the grid
const btnGrid = document.getElementById('clean-grid');

btnGrid.addEventListener('click', () => {
    gridSize = prompt('Choose a size for the new grid!\n\n The Sky is the limit... up to a 100...\n\n Sorry!!! ;-)\n');
    console.log(gridSize);
    
    createGrid(gridSize);
});



function createGrid(size) {
    // create grid with x divs and append them
    for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1){
            let div = document.createElement('div');
            div.setAttribute('id', `grid${i}`);
            div.setAttribute('class', 'grid')
            gameContainer.appendChild(div);
        }
    }
    
    setPaintingJob();
}


function setPaintingJob()  {
    const divsGrid = document.querySelectorAll('.grid');
    console.log(divsGrid);
    
    // Set trailing hover effect
    divsGrid.forEach(div => {
        div.addEventListener('mouseenter', (e) => {
            console.log(e);
        
            //e.target.style.backgroundColor = 'red';
            e.target.classList.add('active');
        });
        
        // Removing the paint
        //div.addEventListener('mouseleave', (e) => {
        //    e.target.classList.remove('active');
        //});
    });
}




createGrid(16);


