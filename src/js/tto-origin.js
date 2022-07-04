const
    scorePlayer_1 = document.querySelector('sec-player-1_state'),
    scorePlayer_2 = document.querySelector('sec-player-2_state'),
    startButton = document.querySelector('.after-a-single-game_continue'),

    theFields = document.querySelectorAll('.the-game_field p'),

    theRobotCheckboxes = document.querySelectorAll('input[type="checkbox"]'),
    thePlayerInput = document.querySelectorAll('input[type="text"]'),
    theRobotCheck = document.querySelectorAll('.wrapper-robot-check')



const 
    //horizontal
    winSituation1 = ['f1', 'f2', 'f3'],
    winSituation2 = ['f4', 'f5', 'f6'],
    winSituation3 = ['f7', 'f8', 'f9'],

    //vertikal
    winSituation4 = ['f1', 'f4', 'f7'],
    winSituation5 = ['f2', 'f5', 'f8'],
    winSituation6 = ['f3', 'f6', 'f9'],

    //diagonal
    winSituation7 = ['f1', 'f5', 'f9'],
    winSituation8 = ['f3', 'f5', 'f7']
   


// const player = {
//     name: '',
//     score: 0,
//     choose: [],
//     robot: false,
//     legitimate: false

// }

// const 
//     player1 = Object.create(player),
//     player2 = Object.create(player)

/**
 * Wird mit Object.create eine neue Instanz eines
 * Objektes instanziert und es ist ein Array vorhanden,
 * wird mit push auf ein spezifisches Objekt angewendet,
 * der Wert in alle Arrays gepusht
 */


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
    currentUser = player1,
    isThePlayerARobot,
    theWinner = false,
    theGameIsOpen = false
    theClickCount = 0



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

            item.dataset.player === thisPlayerData ?
            thisCheckbox = item :
            console.log('')
        })

        thePlayerInput.forEach( (item) => {
            // console.log(item.dataset.player)
            // console.log(thisPlayerData)

            item.dataset.player === thisPlayerData ?
            thisInput = item :
            console.log('')
        })

        theRobotCheck.forEach( (item) => {
            // console.log(item.dataset.player)
            // console.log(thisPlayerData)

            item.dataset.player === thisPlayerData ?
            thisWrapper = item :
            console.log('')
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

                    break
            }
        }
        else{
            alert('Sie müssen einen gültigen Namen eingeben')
        }
           
        // console.log(player1)
        // console.log(player2)
    }



//the start
    const letTheGameStart = (startButton) => {
        console.log('fire')
        if (
            player1.legitimate === true &&
            player2.legitimate === true
        ) {
           theGameIsOpen = true
        }
        else{
            alert('Das Spiel kann nicht gestarten werden \n überprüfen Sie ihre Eingaben')
        }

     
        theGameIsOpen ?
        theStart() :
        console.log('the game is closed')
    }

//the Game
const theGame = ()=> {
    console.log(theFields)
    

    player1.isThePlayerARobot === true ?
    theRobotPlayer(player1) :
    console.log('player 1 is not a robot')


    theFields.forEach( field => {
        field.addEventListener('click', ()=> {
            const thisClassName = field.className
            // console.log(thisClassName)

            switch(currentUser){
                case player1:
                    if(field.dataset.isopen === 'true' && theGameIsOpen){
                        
                        field.innerHTML = "X"
                        player1.choose.push(thisClassName)
                        
                        
                        checkTheWinSituation(player1.choose)
    
                        
                        theWinner ?
                        theWinnerIsFound(player1) :
                        theStepWhenNoWinnerIsFound(player1, field)
    
                        
                        break
                   
                    }
                    else if(field.dataset.isopen !== 'true') {
                        alert('dieses Feld ist besetzt')
                        break
                    }
                    else if(!theGameIsOpen) {
                        alert('Der Startknopf muss gedrückt werden')
                        break
                    }
                    

                   
                   

                case player2:
                    if(field.dataset.isopen === 'true' && theGameIsOpen){
                        field.innerHTML = "Y"
                        player2.choose.push(thisClassName)
                        
                        console.log(player2.name)
    
                        checkTheWinSituation(player2.choose)
    
                        
    
                        theWinner ?
                        theWinnerIsFound(player2) :
                        theStepWhenNoWinnerIsFound(player2, field)
    
                       

                        break
                    }
                    else if(field.dataset.isopen !== 'true') {
                        alert('dieses Feld ist besetzt')
                        break
                    }
                    else if(!theGameIsOpen) {
                        alert('Der Startknopf muss gedrückt werden')
                        break
                    }
   
            }


        })
    })
}
    


// some functions
    const checkTheWinSituation = (playerChoose) => {

       
        //the horizontal Situations
            const ws1 = playerChoose.filter( item => {
                return item === 'f1' || item === 'f2'|| item === 'f3'
            })

            const ws2 = playerChoose.filter( item => {
                return item === 'f4' || item === 'f5'|| item === 'f6'
            })

            const ws3 = playerChoose.filter( item => {
                return item === 'f7' || item === 'f8'|| item === 'f9'
            })


        //the vertical situations
            const ws4 = playerChoose.filter( item => {
                return item === 'f1' || item === 'f4'|| item === 'f7'
            })

            const ws5 = playerChoose.filter( item => {
                return item === 'f2' || item === 'f5'|| item === 'f8'
            })

            const ws6 = playerChoose.filter( item => {
                return item === 'f3' || item === 'f6'|| item === 'f9'
            })


        //the diagonal situations
            const ws7 = playerChoose.filter( item => {
                return item === 'f1' || item === 'f5'|| item === 'f9'
            })

            const ws8 = playerChoose.filter( item => {
                return item === 'f3' || item === 'f5'|| item === 'f7'
            })

        const allWinSituations = [ws1, ws2, ws3, ws4, ws5, ws6, ws7, ws8]

        if(
            ws1.length === 3 ||
            ws2.length === 3 ||
            ws3.length === 3 ||

            ws4.length === 3 ||
            ws5.length === 3 ||
            ws6.length === 3 ||

            ws7.length === 3 ||
            ws8.length === 3 
        ){  

            const theWinningSitIs = allWinSituations.filter( (item) => {
                return item.length === 3
            })

            console.log(theWinningSitIs)
            console.log(Array.isArray(theWinningSitIs))

            
            const [a, b, c] = theWinningSitIs[0]

            console.log('the a' + a)
            console.log('the b' +  b)
            console.log('the c' + c)

            theFields.forEach( item => {
                if(
                    item.classList.contains(`${a}`) ||
                    item.classList.contains(`${b}`) ||
                    item.classList.contains(`${c}`) 
                   
                ){
                    item.style.color = 'tomato'
                    console.log(item)
                }
                else{
                    item.style.color = 'transparent'
                }
                
            })

            return theWinner = true
            // alert('a winner')
        }

        // console.log(theWinner)
    }


const theWinnerIsFound = (player) =>{
    console.log(player)
    player.score +=1
    player1.choose = []
    player2.choose = []
    theGameIsOpen = false
    localStorage.setItem("Player1", JSON.stringify(player1))
    localStorage.setItem("Player2", JSON.stringify(player2))
    

    setTimeout(
       () => {
        alert('the Winner is player ' + player.name)
        startButton.disabled = false
        theWinner = false
        location.reload()

        theFields.forEach( item => {
            item.innerHTML = ''
            item.setAttribute('data-isopen', 'true')   
        })

       },2000)

   

}


const theRobotPlayer = (player)=> {

        let theSettingIsAlright = false

      do{
        
        let randomClickNumber = Math.floor(Math.random() * 9)
        let randomField = theFields[randomClickNumber]

        console.log(randomClickNumber)
        console.log('classname random field', randomField.className)
        console.log('randomfield', randomField)


        let randomFieldClassName = randomField.className

        if(
            randomField.dataset.isopen === 'true' && theGameIsOpen
        ){
            randomField.innerHTML = "H"
            player.choose.push(randomFieldClassName)

            // theClickCount += 1
            // checkTheCount()

            checkTheWinSituation(player.choose)
    
            theWinner ?
            theWinnerIsFound(player) :
            theStepWhenNoWinnerIsFound(player, randomField)
            // console.log('player H is current not the winner')

            // console.log('player h ', player)
            // // console.log('ws1', ws1)
            // randomField.setAttribute('data-isopen', 'false')

            // console.log('the ai chooses', player.choose)

            // player === player1 ?
            // currentUser = player2 :
            // currentUser = player1
            theSettingIsAlright = true
            
        }
        else{
            console.log('Das Feld ist besetzt')
            currentUser = player
            theSettingIsAlright = false
        }

        }
        while (theSettingIsAlright === false && theGameIsOpen)
        
    
        

    
}

const theStart = () => {
    alert('Das Spiel kann beginnen')
    startButton.disabled = true
    console.log(theFields)

    theGame()
}


const checkTheCount = () =>{
    if(theClickCount === 9){
        theGameIsOpen = false
        alert('Unentschieden')
        setTimeout( ()=> location.reload(), 500)
    }
}


const theStepWhenNoWinnerIsFound = (player, field) =>{
    theClickCount += 1
    checkTheCount()

    console.log('current player ', player)
    field.setAttribute('data-isopen', 'false')

    player === player1 ?
    currentUser = player2 :
    currentUser = player1

    currentUser.isThePlayerARobot ?
    theRobotPlayer(currentUser) :
    console.log('the robot is', currentUser)

}