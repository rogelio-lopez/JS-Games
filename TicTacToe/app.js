const squares = document.querySelector('.squares');

// keeps track of boxes picked 
const squareTracker = [
    {
        position: 'top-left',
        picked: 0
    },
    {
        position: 'top-middle',
        picked: 0
    },
    {
        position: 'top-right',
        picked: 0
    },
    {
        position: 'middle-left',
        picked: 0
    },
    {
        position: 'center',
        picked: 0
    },
    {
        position: 'middle-right',
        picked: 0
    },
    {
        position: 'bottom-left',
        picked: 0
    },
    {
        position: 'bottom-middle',
        picked: 0
    },
    {
        position: 'bottom-right',
        picked: 0
    }
];

// check for matches
// function (maybe used in event listener)
// after 4 total picks (2 each)

let turn = 0;

squares.addEventListener('click', (e) =>{

    if (e.target.className == 'square'){

        // X
        if(turn % 2 == 0){

            let p = (e.target.getAttribute('id'));

            squareTracker.forEach(square =>{
                if (square.position == p && square.picked == 0){
                    
                }
                else{
                    
                }
            });

            turn++;
        }

        // O
        else{

            turn++;
        }
    }
});