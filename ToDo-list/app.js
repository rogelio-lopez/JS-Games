const list = document.querySelector('#list');
let maxItems = 0;

// event listener on butons 
list.addEventListener('click', (e) =>{

    // removing list item
    if(e.target.className == 'delete'){
        const li = e.target.parentElement.parentElement;
        list.removeChild(li);
        maxItems--;
    }

    // crossing off list item & changing check
    else if(e.target.className == 'done'){
        // line through text & removing check mark
        const text = e.target.parentElement.previousElementSibling;  
        text.style.textDecoration = 'line-through';
        e.target.style.display = 'none';

        // display X instead of check mark
        const x = e.target.nextElementSibling;
        x.style.display = 'flex';
    }

    else if (e.target.className == 'doneX'){
        // taking line off text and removig X
        const text = e.target.parentElement.previousElementSibling;  
        text.style.textDecoration = 'none';
        e.target.style.display = 'none';

        // display checkmark instead of X
        const checkmark = e.target.previousElementSibling;
        checkmark.style.display = 'flex';
    }

});


// Adding items to list
const form = document.forms[0];

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    // value inside input inside form
    const text = e.target.querySelector("input").value;

    // creating elements
    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    const div = document.createElement('div');
    const checkSpan = document.createElement('span');
    const xSpan = document.createElement('span');
    const deleteSpan = document.createElement('span');

    // text inside elements
    textSpan.innerText = text;
    checkSpan.innerText = "✔";
    xSpan.innerText = "✖";
    deleteSpan.innerText = "DELETE";

    // adding class names
    li.className = "list__item";
    textSpan.className = "text";
    div.className = "btns";
    checkSpan.className = "done";
    xSpan.className = "doneX";
    deleteSpan.className = "delete";

    // adding elements to li
    div.appendChild(checkSpan);
    div.appendChild(xSpan);
    div.appendChild(deleteSpan);
    li.appendChild(textSpan);
    li.appendChild(div);
    
    if(maxItems <= 1){
        list.appendChild(li);
        maxItems++;
    }
    else{
        window.alert("Woah there! Slow down! Try finishing some items before addign more!");
    }

    form.reset();
});

