const p1 = {
    score: 0,
    button:document.querySelector('#P1Button'),
    display: document.querySelector('#p1Display'),
}
const p2 = {
    score:0,
    button:document.querySelector('#P2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#Reset')
const meta = document.querySelector('#playto');

let WinningScore= 3;
let gameOver=false;

function updateScores(player, oponent){
    if(!gameOver){
        player.score += 1;
        if(player.score === WinningScore){
            gameOver= true
            player.display.classList.add('has-text-success')
            oponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            oponent.button.disabled = true;

        }
        player.display.textContent=player.score;
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2);
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1);
})

meta.addEventListener('change', function(){
    WinningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)



function reset(){
    gameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.button.disabled = false
    }

}