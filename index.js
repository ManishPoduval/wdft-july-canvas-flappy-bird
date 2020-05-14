let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.style.border = '2px solid black';

let bg = new Image();
bg.src = 'bg.png';

let fg = new Image();
fg.src = 'fg.png';

let bird = new Image();
bird.src = 'bird.png'

let pipeNorth = new Image();
pipeNorth.src = 'pipeNorth.png'

let pipeSouth = new Image();
pipeSouth.src = 'pipeSouth.png'

let birdY = 50;
let bY = 2;
let score = 0;
let bX = 20;
let intervalID = 0;



document.addEventListener('mousedown', function(){
    bY = -7;
})

document.addEventListener('mouseup', function(){
    bY = 2;
})


let pipes = [{x: canvas.width-40, y: 0}]

function draw(){
    ctx.drawImage(bg,0, 0)
    
    ctx.drawImage(bird, bX, birdY);


    for(let i=0; i<pipes.length; i++){

        let constant = pipeNorth.height + 100
        ctx.drawImage(pipeNorth, pipes[i].x, pipes[i].y);
        ctx.drawImage(pipeSouth, pipes[i].x, pipes[i].y+constant);
        pipes[i].x--;
        if(pipes[i].x == 5){
            score++;
        }
        if ( pipes[i].x === 30) {
            pipes.push({
                x: canvas.width-20,
                y: Math.floor(Math.random()*pipeNorth.height) - pipeNorth.height,
            })
        }
        /*HERE SOLUTION*/
        if( bX + bird.width >= pipes[i].x && bX <= pipes[i].x + pipeNorth.width && (birdY <= pipes[i].y + pipeNorth.height || birdY+bird.height >= pipes[i].y+constant) || birdY + bird.height >=  canvas.height - fg.height){
            alert('GAME OVER');
            clearInterval(intervalID);
            location.reload(); 
        }
    }
    
    
   
    
    ctx.drawImage(fg,0, canvas.height-80);
    
    if (birdY > canvas.height-100) {
        alert('GAME OVER');
        clearInterval(intervalID);
        location.reload();
    }
    else {
        birdY += bY;
    }
    ctx.font = '20px Verdana';
    ctx.fillText('Score: '+ score, 20, canvas.height-30)
    
    
}

intervalID = setInterval(() => {
    requestAnimationFrame(draw);
}, 10)