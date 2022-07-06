const
    scorePlayer_1 = document.querySelector('sec-player-1_state'),
    scorePlayer_2 = document.querySelector('sec-player-2_state'),
    startButton = document.querySelector('.game-options_start'),

    theFields = document.querySelectorAll('.the-game_field p'),
    gameOptions = document.querySelector('.game-options')

  



let
    currentUser = player1,
    isThePlayerARobot,
    theWinner = false,
    theGameIsOpen = false
    theClickCount = 0


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
                        
                        // field.innerHTML = "X"
                        field.style.background = 'url(./pics/sorceress-face.webp) center center / cover no-repeat'
                        field.style.boxShadow = '1px 3px 6px #000 inset'
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
                        // field.innerHTML = "O"

                        field.style.background = 'url(./pics/skeletor-face.webp) center center / cover no-repeat'
                        field.style.boxShadow = '1px 3px 6px #000 inset'
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
                    // item.style.color = 'transparent'
                    item.style.backgroundImage = 'none'
                    
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
        // alert('the Winner is player ' + player.name)
        startButton.disabled = false
        theWinner = false
        location.reload()
        gameOptions.style.display = 'flex'

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
            // randomField.innerHTML = "H"
            player === player1 ?
            randomField.style.background = 'url(../../public/pics/sorceress-face.webp) center center / cover no-repeat' :
            randomField.style.background = 'url(../../public/pics/skeletor-face.webp) center center / cover no-repeat'

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
    // alert('Das Spiel kann beginnen')
    startButton.disabled = true
    console.log(theFields)
    startButton.style.transform = 'rotateY(180deg)'
    setTimeout( ()=> gameOptions.style.top = '-200%', 500)
    // gameOptions.style.top = '-200%'

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


const resetThePlayers = ()=> {
    localStorage.clear()
    location.reload()
}