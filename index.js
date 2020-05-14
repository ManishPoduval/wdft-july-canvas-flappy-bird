let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';

let bg = new Image();
console.log(bg)
bg.src = 'bg.png';

let fg = new Image();
fg.src = 'fg.png'

let bird = new Image();
bird.src = 'bird.png'
let birdY = 60; // y COORDINATE OF THE BIRD
let interval = 0

let pipeNorth = new Image();
pipeNorth.src = 'pipeNorth.png'

let pipeSouth = new Image();
pipeSouth.src = 'pipeSouth.png'


document.addEventListener('mousedown', () => {
    //do something
    console.log('clicking');
    birdY -= 30;
})


let pipe = [{
    x: canvas.width-30,
    y: 0
}]


function draw(){
        ctx.drawImage(bg, 0, 0);
        ctx.drawImage(bird, 20, birdY);

        for(let i=0; i<pipe.length; i++) {
            let constant = pipeNorth.height + 70;
            ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
            ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
            pipe[i].x -= 1;

            if ( pipe[i].x == 30) {
                pipe.push({
                    x: canvas.width-30,
                    y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
                })
            }

        }


        if ( birdY + (bird.height/2) >= canvas.height - fg.height) {
            //end the game
            clearInterval(interval)
            alert('GAME OVER BRO!!')
            
        }
        else {
            birdY += 2;
        }

        ctx.drawImage(fg, 0,  canvas.height - fg.height);
}

interval = setInterval(() => {
    draw();
}, 20)





























