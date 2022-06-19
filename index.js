//const divsArr = [];

const gameContainer = document.querySelector('.game-container');


// create 16 divs and append them
for (let i = 0; i < 16; i += 1) {
    for (let j = 0; j < 16; j += 1){
        let div = document.createElement('div');
        div.setAttribute('id', `grid${i}`);
        div.setAttribute('class', 'grid')
        
        //divsArr.push(div);
        //console.log(div);
        
        gameContainer.appendChild(div);
    }
}



// Set trailing hover effect
const divsGrid = document.querySelectorAll('.grid');
//console.log(divsGrid);


divsGrid.forEach(div => {
    div.addEventListener('mouseenter', (e) => {
        console.log(e);
    
        //e.target.style.backgroundColor = 'red';
        e.target.classList.add('active');
    });
    
    div.addEventListener('mouseleave', (e) => {
        e.target.classList.remove('active');
    });
});






