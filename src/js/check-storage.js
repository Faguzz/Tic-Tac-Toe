const 
    player1FromStorage = JSON.parse( localStorage.getItem('Player1') ),
    player2FromStorage = JSON.parse( localStorage.getItem('Player2') ),

    player1ShowName = document.querySelector(".the-name-of-player-1"),
    player2ShowName = document.querySelector('.the-name-of-player-2'),

    player1Checkbox = document.querySelector('#check-robot-1'),
    player2Checkbox = document.querySelector('#check-robot-2'),

    player1scoreField = document.querySelector('.sec-player-1_state'),
    player2scoreField = document.querySelector('.sec-player-2_state'),

    player1EnterButton = document.querySelector('.sec-player-1_button'),
    player2EnterButton = document.querySelector('.sec-player-2_button'),

    theSetThePlayersSection = document.querySelector('.set-the-players'),

    theInputFieldOfPlayerOne = document.getElementById('input-player-1'),
    theInputFieldOfPlayerTwo = document.getElementById('input-player-2')

// console.log(player1FromStorage)
// console.log(player2FromStorage)


const setPlayerOfStorage = (player, playerName, playerInput, playerCheckbox, playerScore, playerEnterButton, playerOb) => {
   theSetThePlayersSection.style.display = 'none'
   playerName.innerHTML = player.name
   playerInput.value = player.name

   player.isThePlayerARobot && (playerCheckbox.checked  = true)

   playerScore.innerHTML = player.score
//    console.log(playerEnterButton)
   playerEnterButton.click()
   playerOb.score = player.score
}


player1FromStorage && setPlayerOfStorage(player1FromStorage, player1ShowName,theInputFieldOfPlayerOne, player1Checkbox, player1scoreField, player1EnterButton, player1)
player2FromStorage && setPlayerOfStorage(player2FromStorage, player2ShowName, theInputFieldOfPlayerTwo, player2Checkbox, player2scoreField, player2EnterButton, player2)
    


// console.log(player1FromStorage.name)
// console.log(player1ShowName)

