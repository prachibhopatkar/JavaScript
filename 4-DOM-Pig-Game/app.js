/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundScore, activePlayer;
scores=[0,0];
roundScore=0; //Tracks total scores for current player
activePlayer = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

function nextPlayer(){
    //change active user
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        roundScore =0;
        activePlayer===0 ? activePlayer=1 : activePlayer=0;
        //change active player indicator
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
}

document.querySelector('.btn-roll').addEventListener('click',function(){
    //get Random Number
    var diceNumber = Math.floor(Math.random()*6 + 1);
    //Display score on dice
    document.querySelector('.dice').src = 'dice-'+diceNumber+'.png';
    //Update the current score if the number on the dice is not 1
    
    if(diceNumber>1){
        // Add the dice Number to the curent scores
        roundScore +=diceNumber;
    }
    else{
        roundScore = 0;
        nextPlayer();
        
    }
    document.getElementById('current-'+activePlayer).textContent  =roundScore;
});



document.querySelector('.btn-hold').addEventListener('click',function(){
    //alert(scores[activePlayer]);
    scores[activePlayer] += roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    //check Winner
    if(scores[activePlayer]>=20){
        document.getElementById('name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        
    }else{
         nextPlayer();
    }
   
    
});