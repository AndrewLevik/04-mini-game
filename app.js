const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['#FA8072', '#FFD700', '#7CFC00', '#00FFFF', '#0000CD', '#FF1493', '	#FFDAB9']

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomeColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomeColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}