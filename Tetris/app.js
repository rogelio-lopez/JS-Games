const canvas = document.getElementById('tetris');
const ctx = canvas.getContext('2d');

// Pimentions
const COL = COLUMN = 10;
const ROW = 20;
const SQ = squareSize = 20;
const EMPTY = 'WHITE';

//draw function
function drawSquare(x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x*SQ, y*SQ, SQ, SQ); 

    ctx.strokeStyle = 'BLACK';
    ctx.strokeRect(x*SQ, y*SQ, SQ, SQ);
}


// draw the board 
let board = [];
for (let r = 0; r < ROW; r++){
    board[r] = [];
    for(let c = 0; c < COL; c++){
        board[r][c] = EMPTY;
    }
}

// display board
function drawBoard(){
    for (let r = 0; r < ROW; r++){
        for(let c = 0; c < COLUMN; c++){
            drawSquare(c,r, board[r][c]);
        }
    }
}

drawBoard();


// Pieces 
const S_piece = [
    [0,1,1,
     1,1,0,
     0,0,0],
    [1,0,0,
     1,1,0,
     0,1,0]
];
/*
const Z_piece = [
    [1,1,0,
     0,1,1,
     0,0,0],
    [0,0,1,
     0,1,1,
     0,1,0]
];

const O_piece = [
    [1,1,0,
     1,1,0,
     0,0,0]
];
*/

// Keyboard event listener
document.addEventListener('keydown', (e) => {
    
    //left
    if(e.keyCode == 37){

    }
    //up (rotate)
    else if (e.keyCode == 38){

    }
    //right
    else if (e.keyCode == 39){
        
    }
    //down
    else if (e.keyCode == 40){
        
    }
});
