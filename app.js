const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#FA8072', '#FFD700', '#7CFC00', '#00FFFF', '#0000CD', '#FF1493', '	#FFDAB9']

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomeColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomeColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}