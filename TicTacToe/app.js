const squares = document.querySelector('.squares');

// keeps track of boxes picked 
const squareTracker = [
    {
        position: 'top-left',
        letter: ''
    },
    {
        position: 'top-middle',
        letter: ''
    },
    {
        position: 'top-right',
        letter: ''
    },
    {
        position: 'middle-left',
        letter: ''
    },
    {
        position: 'center',
        letter: ''
    },
    {
        position: 'middle-right',
        letter: ''
    },
    {
        position: 'bottom-left',
        letter: ''
    },
    {
        position: 'bottom-middle',
        letter: ''
    },
    {
        position: 'bottom-right',
        letter: ''
    }
];

// winning combinations
const winnerCheck = () => {

    let found = '';

    for(let i = 0; i < 4; i++){
        if (squareTracker[i].letter != 1){

            let sqr1 = squareTracker[i].letter;
            
            //top left
            if(i == 0){

                // added breaks bc of bugs
                if(sqr1 == squareTracker[3].letter && sqr1 == squareTracker[6].letter){
                    found = sqr1;
                    break;
                }
                else if(sqr1 === squareTracker[1].letter && sqr1 === squareTracker[2].letter){
                    found = sqr1;
                    break;
                }       
                else if(sqr1 === squareTracker[4].letter && sqr1 === squareTracker[8].letter){
                    found = sqr1;
                    break;
                }

                /*
                (sqr1 == squareTracker[3].letter && sqr1 == squareTracker[6].letter)?
                    found = sqr1 : 
                    (sqr1 === squareTracker[1].letter && sqr1 === squareTracker[2].letter)?
                        found = sqr1 :
                        (sqr1 === squareTracker[4].letter && sqr1 === squareTracker[8].letter)?
                            found = sqr1 : '';*/
            }
            //top middle
            else if (i == 1){
                (sqr1 === squareTracker[4].letter && sqr1 === squareTracker[7].letter)?
                    found = sqr1 : '';
            }
            //top right
            else if(i == 2){
                (sqr1 === squareTracker[4].letter && sqr1 === squareTracker[6].letter)?
                    found = sqr1 :
                    (sqr1 === squareTracker[7].letter && sqr1 === squareTracker[8].letter)?
                        found = sqr1 : '';
            }
            //middle left
            else if(i == 3){
                (sqr1 === squareTracker[4].letter && sqr1 === squareTracker[5].letter)?
                    found = sqr1 : '';
            }
        }
        else{
            continue;
        }
    }

    return found;
}

// check for matches
let turn = 0;
const winner = document.getElementById('winner');
const winnerMessage = document.getElementsByClassName('winnerMessage')[0];

squares.addEventListener('click', (e) =>{

    if (e.target.className == 'square'){

        let p = (e.target.getAttribute('id'));

        // X
        if(turn % 2 == 0){
            squareTracker.forEach(square =>{
                if (square.position == p && square.letter == ''){
                    e.target.lastElementChild.style.display = 'inline';
                    square.letter = 'x';
                }
            });
            turn++;
        }
        // O
        else{
            squareTracker.forEach(square =>{
                if (square.position == p && square.letter == 0){
                    e.target.firstElementChild.style.display = 'inline';
                    square.letter = 'o';
                }
            });
            turn++;
        }
    }

    // check if won 
    if (turn > 4 && winnerCheck() != ''){
        (winnerCheck() == 'x')?
            winner.innerText = '1' : winner.innerText = '2';

        winnerMessage.style.display = 'inline';
        setTimeout(() => {
            location.reload();
        }, 1500);
    }
});