/** -----Card flip effect----- */

// keeping score 
let matchNum = 0;
let missedNum = 0;
const matches = document.querySelector('#matchNum');
const missed = document.querySelector('#missedNum'); 

const cards = document.querySelector('.cards');

let cardsFlipped = 0;
let card1 = '';

cards.addEventListener('click', (e) => {

    // check card is clicked not board
    if (e.target.parentElement.className == 'card'){

        // only click cards facing down
        if(!e.target.classList.contains('front--active') && e.target.classList.contains('front')){ 
        
            // when clicking the first card: just flip
            if (cardsFlipped == 0){
            
                e.target.style.transitionDelay = '0s'
                e.target.classList.add('front--active');

                e.target.nextElementSibling.style.transitionDelay = '.2s';
                e.target.nextElementSibling.classList.add('back--active');

                cardsFlipped++;
                card1 = e.target;
            }
            // when clicking second card: check if match
            else{

                e.target.style.transitionDelay = '0s'
                e.target.classList.add('front--active');

                e.target.nextElementSibling.style.transitionDelay = '.2s';
                e.target.nextElementSibling.classList.add('back--active');

                // no match -> flip them back with half second delay
                if(card1.nextElementSibling.style.backgroundColor != e.target.nextElementSibling.style.backgroundColor){
                    setTimeout(function () {
                        card1.nextElementSibling.style.transitionDelay = '0s';
                        card1.nextElementSibling.classList.remove('back--active');
    
                        e.target.nextElementSibling.style.transitionDelay = '0s';
                        e.target.nextElementSibling.classList.remove('back--active');
    
                        card1.style.transitionDelay = '.2s';
                        card1.classList.remove('front--active');
    
                        e.target.style.transitionDelay = '.2s';
                        e.target.classList.remove('front--active');
    
                        card1 = '';
                        missedNum++; 
                        missed.innerText = missedNum;
                    }, 500);
                }
                // match -> dont flip + add to score
                else{
                    matchNum++;
                    card1 = '';
                    matches.innerText = matchNum;

                    // congrats popup + refresh page when finished
                    if(matchNum == 8){
                        window.alert('You found all the matches!! Lets play again!');
                        location.reload();
                    }
                }

                cardsFlipped = 0;
            }
        }   
    }
});


/** -----Assigning colors----- */

// color array
// (create random colors later)
const colors = [
    {
        color : 'red',
        card1 : 0,
        card2 : 0,
    }, 
    {
        color : 'blue',
        card1 : 0,
        card2 : 0,
    },
    {
        color : 'orange',
        card1 : 0,
        card2 : 0,
    },
    {
        color : 'black',
        card1 : 0,
        card2 : 0,
    },
    {
        color : 'purple',
        card1 : 0,
        card2 : 0,
    },
    {
        color : 'yellow',
        card1 : 0,
        card2 : 0,
    },
    {
        color : 'green',
        card1 : 0,
        card2 : 0,
    },
    {
        color : 'pink',
        card1 : 0,
        card2 : 0,
    }
];

// select all the card divs & turn into array
const cardArr = Array.from(document.querySelectorAll('.card'));

// assign colors randomly to card
cardArr.forEach(card => {

    let assigned = false;

    while (!assigned){

        let colorNum = Math.round(Math.random() * 7);

        // if color is taken check for other
        if(colors[colorNum].card1 == 1 && colors[colorNum].card2 == 1){
            continue;
        }
        // first card spot for color isnt taken
        else if (colors[colorNum].card1 == 0){
            card.lastElementChild.style.backgroundColor = colors[colorNum].color;
            colors[colorNum].card1 = 1;
            assigned = true;
        }
        // second card is assigned a color
        else if (colors[colorNum].card1 == 1 && colors[colorNum].card2 == 0){
            card.lastElementChild.style.backgroundColor = colors[colorNum].color;
            colors[colorNum].card2 = 1;
            assigned = true;
        }
    }
});