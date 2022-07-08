const
    theRobotCheckboxes = document.querySelectorAll('input[type="checkbox"]'),
    thePlayerInput = document.querySelectorAll('input[type="text"]'),
    theRobotCheck = document.querySelectorAll('.wrapper-robot-check'),

    thePlayer1Section = document.querySelector('.sec-player-1'),
    thePlayer2Section = document.querySelector('.sec-player-2'),
    setThePlayerSection = document.querySelector('.set-the-players'),

    nameFieldOfPlayerOne = document.querySelector('.the-name-of-player-1'),
    nameFieldOfPlayerTwo = document.querySelector('.the-name-of-player-2')


const player1 = {
    name: '',
    score: 0,
    choose: [],
    robot: false,
    legitimate: false

}

const player2 = {
    name: '',
    score: 0,
    choose: [],
    robot: false,
    legitimate: false

}

let    
    areAllSettingsDoneP1 = false,
    areAllSettingsDoneP2 = false

//set a new player
    const setPlayer = (player) => {
        // console.log(player)
        // console.log(player.dataset.player)
        // console.log(theRobotCheckboxes)

        const thisPlayerData = player.dataset.player

        let 
            thisCheckbox,
            thisInput,
            thisWrapper
        

        theRobotCheckboxes.forEach( (item) => {
            // console.log(item.dataset.player)
            // console.log(thisPlayerData)

            item.dataset.player === thisPlayerData && (thisCheckbox = item)
        
           
        })

        thePlayerInput.forEach( (item) => {
            // console.log(item.dataset.player)
            // console.log(thisPlayerData)

            item.dataset.player === thisPlayerData && (thisInput = item)
             
            
        })

        theRobotCheck.forEach( (item) => {
            // console.log(item.dataset.player)
            // console.log(thisPlayerData)

            item.dataset.player === thisPlayerData && (thisWrapper = item)
             
        })

        // console.log(thisCheckbox.checked)
        // console.log(thisInput.value)
        // console.log(thisWrapper)

        if(thisInput.value){
            switch(thisPlayerData){

                case 'player-1':
                    player1.name = thisInput.value
                    player1.isThePlayerARobot = thisCheckbox.checked
                    player1.legitimate = true

                    player.style.display = 'none'
                    thisInput.setAttribute('readonly', true)
                    thisInput.setAttribute('disabled', true)
                    thisInput.classList.add('accessed-input')

                    thisWrapper.style.display = 'none'

    
                    nameFieldOfPlayerOne.innerHTML = player1.name

                    areAllSettingsDoneP1 = true

                    break

                case 'player-2':
                    player2.name = thisInput.value
                    player2.isThePlayerARobot = thisCheckbox.checked
                    player2.legitimate = true

                    player.style.display = 'none'
                    thisInput.setAttribute('readonly', true)
                    thisInput.setAttribute('disabled', true)
                    thisInput.classList.add('accessed-input')

                    thisWrapper.style.display = 'none'

                    nameFieldOfPlayerTwo.innerHTML = player2.name

                    areAllSettingsDoneP2 = true

                    break
            }

            (areAllSettingsDoneP1 === true && areAllSettingsDoneP2 === true) && pushThePlayersOut()
            console.log(areAllSettingsDoneP1)
            console.log(areAllSettingsDoneP2)
        }
        else{
            alert('Sie müssen einen gültigen Namen eingeben')
        }
        
        // console.log(player1)
        // console.log(player2)
    }


const pushThePlayersOut = () => {
    setThePlayerSection.style.display = 'none'
}