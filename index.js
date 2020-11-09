function compare(player1,player2) {
    if (player1 === 'rock' && player2 === 'paper') {
        console.log('Paper wins');
    }else if (player1 === 'rock' && player2 === 'rock') {
        console.log('Try again');
    }else if (player1 === 'rock' && player2 === 'scissors') {
        console.log('ROCK Wins');
    }else if (player1 === 'paper' && player2 === 'paper') {
        console.log('Try again');
    }else if (player1 === 'paper' && player2 === 'rock') {
        console.log('Paper wins');
    }else if (player1 === 'paper' && player2 === 'scissors') {
        console.log('Scissors win');
    }else if (player1 === 'scissors' && player2 === 'scissors') {
        console.log('Try again');
    }else if (player1 === 'scissors' && player2 === 'paper') {
        console.log('Scissors win');
    }else if (player1 === 'scissors' && player2 === 'rock') {
        console.log('Rock wins');
    }else if (player1 !== 'paper' && player1 !== 'rock' &&  player1 !== 'scissors') {
        console.log('Invalid input');
    }else if (player2 !== 'paper' && player2 !== 'rock' &&  player2 !== 'scissors') {
        console.log('Invalid input');
    }
}
let BUTTON = document.getElementById("play")
BUTTON.addEventListener('click', function(){
    compare('paper','scissors')
})