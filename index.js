const holder = document.querySelector('.containerHolder')
const container = document.querySelector('.container')
const chooseSquaresButton = document.querySelector('#chooseSquares')
const squaresDialog = document.querySelector('#squaresDialog')
const squaresInput = document.querySelector('#squares')
const squaresSubmit = document.querySelector('#submitSquares')
squaresDialog.returnValue = null

chooseSquaresButton.addEventListener('click', () => squaresDialog.showModal())
squaresSubmit.addEventListener('click', chooseSquares)


function drawSquares(squares) {
    for (let i = 0; i < squares**2; i++) {
        const square = document.createElement('div')
        square.addEventListener('mouseenter', () => square.style.backgroundColor = 'teal')
        square.style.width = `${100/squares}%`
        square.style.height = `${100/squares}%`
        container.appendChild(square)
    }
    
}

function chooseSquares() {
    while (container.firstChild) { 
        container.removeChild(container.lastChild);
    }
    const squaresChosen = squaresInput.value
    drawSquares(squaresChosen)
}
