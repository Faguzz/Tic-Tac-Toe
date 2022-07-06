const 
    theBoard = document.querySelector('.the-game_field')


let 
    theBoardHeight = theBoard.clientHeight,
    theBoardWidth = theBoard.clientWidth,
    windowHeight = window.innerHeight,
    windowWidth = window.innerWidth


windowWidth > windowHeight ? 
theBoard.style.width = `${theBoardHeight}px` :
theBoard.style.height = `${theBoardWidth}px`

console.log('the board height',theBoardHeight)
console.log('the board width', theBoardWidth)
console.log('window height', windowHeight)
console.log('window width', windowWidth)

