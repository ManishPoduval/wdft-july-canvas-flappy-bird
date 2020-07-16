let canvas = document.getElementById('myCanvas')
canvas.style.border = '3px solid black'

let ctx = canvas.getContext('2d')

let intervalId = 0;

let bgImg = new Image();
bgImg.src = 'bg.png'

let birdImg = new Image();
birdImg.src = 'bird.png'

let fg = new Image();
fg.src = 'fg.png'

let pipeNorth = new Image();
pipeNorth.src = 'pipeNorth.png'

let pipeSouth = new Image();
pipeSouth.src = 'pipeSouth.png'

let birdY = 20;
let incrementY = 5
let pipeX = 300
let score = 0

canvas.addEventListener('mousedown', () => {
    incrementY = -10
})

canvas.addEventListener('mouseup', () => {
    incrementY =  5
})

let pipes= [{x: 250, y: 0}]

function draw(){
    ctx.drawImage(bgImg, 0, 0)
    ctx.drawImage(birdImg, 20, birdY)

    for (let i=0; i < pipes.length; i++){
        ctx.drawImage(pipeNorth, pipes[i].x, pipes[i].y)
        ctx.drawImage(pipeSouth, pipes[i].x, pipes[i].y+ pipeNorth.height+ 150)
        pipes[i].x--
        if (pipes[i].x == 10){
            score++
        }
        if (pipes[i].x == 40){
            pipes.push({
                x: 250,
                y: -Math.floor(Math.random()*pipeNorth.height)
            })
        }
    }


    ctx.drawImage(fg, 0, canvas.height - 70)
    birdY += incrementY
    if (birdY == canvas.height - 70 ){
        clearInterval(intervalId)
        alert('GAME OVER!')
    }

    ctx.font = '20px Verdana'
    ctx.fillText('Score: '+score,30,30)

}

intervalId = setInterval(() => {
    requestAnimationFrame(draw)
}, 20)



