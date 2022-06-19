//const divsArr = [];

const gameContainer = document.getElementById('game');





// create 16 divs and append them
for (let i = 0; i < 16; i += 1) {
    let div = document.createElement('div');
    div.setAttribute('id', `grid${i}`);
    div.setAttribute('class', 'grid')
    
    //divsArr.push(div);
    //console.log(div);
    
    gameContainer.appendChild(div);
}









